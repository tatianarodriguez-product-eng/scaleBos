import { NextResponse } from 'next/server';
import { NOTION_OPTION_NAMES } from '@/lib/leads';
import { EMAIL_PATTERN, FULL_NAME_PATTERN, HANDLE_PATTERN, NOTION_PAGE_ID_PATTERN } from '@/lib/validation';

// Server only: the Notion key never reaches the browser.
// Environment variables, set in Netlify (or in .env.local to run locally, never committed):
// NOTION_TOKEN (the Notion key) and NOTION_LEADS_DB_ID (the Leads CRM database). Neither lives in the code.
const NOTION_VERSION = '2022-06-28';

const URL_SCHEME_PATTERN = /^https?:\/\//i; // starts with http:// or https://
const LEADING_AT_PATTERN = /^@/;
const DASHES_PATTERN = /-/g;

// Notion IDs come with or without dashes; compare them without
const withoutDashes = (id: string) => id.replace(DASHES_PATTERN, '');

function leadsDbId() {
  const id = process.env.NOTION_LEADS_DB_ID;
  if (!id) throw new Error('NOTION_LEADS_DB_ID is not set');
  return withoutDashes(id);
}

type NicheKey = keyof typeof NOTION_OPTION_NAMES.niche;
type RevenueKey = keyof typeof NOTION_OPTION_NAMES.revenue;
type TeamKey = keyof typeof NOTION_OPTION_NAMES.teamSize;

interface LeadBody {
  fullName?: string;
  email?: string;
  niche?: string;
  revenue?: string;
  teamSize?: string;
  handle?: string;
  website?: string; // honeypot: real visitors never fill it
  utm?: Record<string, string>;
}

const clean = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const text = (v: string) => ({ rich_text: v ? [{ text: { content: v } }] : [] });
const select = (name: string) => ({ select: { name } });

// "Social media" is a URL field: turn "@handle" or "site.com" into a link
function toUrl(handle: string): string | null {
  if (!handle) return null;
  if (URL_SCHEME_PATTERN.test(handle)) return handle;
  if (handle.includes('.') && !handle.startsWith('@')) return `https://${handle}`;
  return `https://instagram.com/${handle.replace(LEADING_AT_PATTERN, '')}`;
}

class NotionError extends Error {
  constructor(readonly status: number, body: string) {
    super(`Notion ${status}: ${body}`);
  }
}

// Notion answers 404 for a page that doesn't exist or isn't shared with the website key
const isNotFound = (err: unknown) => err instanceof NotionError && err.status === 404;

async function notion(path: string, method: 'GET' | 'POST' | 'PATCH', body?: unknown) {
  const token = process.env.NOTION_TOKEN;
  if (!token) throw new Error('NOTION_TOKEN is not set');
  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: 'no-store',
  });
  if (!res.ok) throw new NotionError(res.status, await res.text());
  return res.json();
}

// POST: create the lead row when the form is submitted
export async function POST(req: Request) {
  let body: LeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Bots fill the hidden field; answer OK and save nothing
  if (clean(body.website)) return NextResponse.json({ id: null });

  const fullName = clean(body.fullName, 120);
  const email = clean(body.email, 200);
  const niche = NOTION_OPTION_NAMES.niche[clean(body.niche) as NicheKey];
  const revenue = NOTION_OPTION_NAMES.revenue[clean(body.revenue) as RevenueKey];
  const teamSize = NOTION_OPTION_NAMES.teamSize[clean(body.teamSize) as TeamKey];
  const handle = clean(body.handle, 300);

  if (!FULL_NAME_PATTERN.test(fullName) || !EMAIL_PATTERN.test(email) || !niche || !revenue || !teamSize || !HANDLE_PATTERN.test(handle)) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
  }

  const utm = body.utm ?? {};
  const properties: Record<string, unknown> = {
    'Name + Surname': { title: [{ text: { content: fullName } }] },
    Email: { email },
    'Social media ': { url: toUrl(handle) },
    'Coaching niche': select(niche),
    'Monthly revenue': select(revenue),
    'Team size': select(teamSize),
    'Lead source': select('Website'),
    'Traffic source': select('Inbound'),
    'Funnel Stage': { status: { name: 'New lead' } },
    'Discovery Call Status': { status: { name: 'Pending' } },
    'UTM source': text(clean(utm.utm_source)),
    'UTM medium': text(clean(utm.utm_medium)),
    'UTM campaign': text(clean(utm.utm_campaign)),
    'UTM content': text(clean(utm.utm_content)),
  };

  try {
    const page = await notion('pages', 'POST', { parent: { database_id: leadsDbId() }, properties });
    return NextResponse.json({ id: page.id });
  } catch (err) {
    console.error('[lead] create failed', err);
    return NextResponse.json({ error: 'Could not save your details' }, { status: 502 });
  }
}

// PATCH: mark the lead as Booked once Calendly confirms the booking
export async function PATCH(req: Request) {
  let id = '';
  try {
    id = clean((await req.json()).id, 64);
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  if (!NOTION_PAGE_ID_PATTERN.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });

  try {
    // Only touch rows that live in the Leads CRM
    const page = await notion(`pages/${id}`, 'GET').catch((err) => {
      if (isNotFound(err)) return null;
      throw err; // outage or rate limit: logged below as a 502
    });
    const parent = withoutDashes(String(page?.parent?.database_id ?? ''));
    if (!parent || parent !== leadsDbId()) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    await notion(`pages/${id}`, 'PATCH', {
      properties: { 'Discovery Call Status': { status: { name: 'Booked' } } },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead] booked update failed', err);
    return NextResponse.json({ error: 'Could not update' }, { status: 502 });
  }
}
