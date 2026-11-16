// Maps the booking form's values to the Leads CRM options in Notion.
// Option names must match the Notion select options exactly.
export const NOTION_OPTION_NAMES = {
  niche: { fitness: 'Fitness', nutrition: 'Nutrition', health: 'Health', other: 'Other' },
  revenue: {
    under10k: 'Under €10k',
    '10k-25k': '€10–25k',
    '25k-50k': '€25–50k',
    '50k-100k': '€50–100k',
    over100k: '€100k+',
  },
  teamSize: { solo: 'Just me', '2-5': '2–5', '6-15': '6–15', '16+': '16+' },
} as const;

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export type UtmKey = (typeof UTM_KEYS)[number];

export const CALENDLY_URL = 'https://calendly.com/przemek-scalebos/free-system-audit';
