import { NextResponse } from 'next/server';
import { NOTION_OPTION_NAMES } from '@/lib/leads';

// Server only: the Notion key never reaches the browser.
// Environment variables (Netlify, or .env.local to run locally; see .env.example):
// NOTION_TOKEN and NOTION_LEADS_DB_ID. Neither lives in the code.
const NOTION_VERSION = '2022-06-28';

function leadsDbId() {
  const id = process.env.NOTION_LEADS_DB_ID;
  if (!id) throw new Error('NOTION_LEADS_DB_ID is not set');
  return id.replace(/-/g, '');
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
  if (/^https?:\/\//i.test(handle)) return handle;
  if (handle.includes('.') && !handle.startsWith('@')) return `https://${handle}`;
  return `https://instagram.com/${handle.replace(/^@/, '')}`;
}

async function notion(path: string, method: string, body: unknown) {
  const token = process.env.NOTION_TOKEN;
  if (!token) throw new Error('NOTION_TOKEN is not set');
  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Notion ${res.status}: ${await res.text()}`);
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

  if (!fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !niche || !revenue || !teamSize || !handle) {
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
  if (!/^[0-9a-f-]{32,36}$/i.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });

  try {
    // Only touch rows that live in the Leads CRM
    const token = process.env.NOTION_TOKEN;
    const page = await fetch(`https://api.notion.com/v1/pages/${id}`, {
      headers: { Authorization: `Bearer ${token}`, 'Notion-Version': NOTION_VERSION },
      cache: 'no-store',
    }).then((r) => r.json());
    const parent = String(page?.parent?.database_id ?? '').replace(/-/g, '');
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
