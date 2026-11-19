// Patterns shared by the booking form (browser) and /api/lead (server), so both check the same thing.

// First and last name: at least two words. A word is letters in any script with their accent marks
// (ł, ñ, José, प्रिया), may be joined by a hyphen or apostrophe (Anne-Marie, O'Brien) and may end in
// a full stop (J. R. Smith, Jr.). Every repeat needs a separator, so the check runs in linear time
// (no freeze on long input).
const NAME_WORD = String.raw`[\p{L}\p{M}]+(?:['’-][\p{L}\p{M}]+)*\.?`;
export const FULL_NAME_PATTERN = new RegExp(`^${NAME_WORD}(?:\\s+${NAME_WORD})+$`, 'u');

// Something@something.something, no spaces
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Instagram handle or website: at least 3 characters, no spaces
export const HANDLE_PATTERN = /^\S{3,}$/;

// Notion page ID: 32 hex characters, with or without dashes
export const NOTION_PAGE_ID_PATTERN = /^[0-9a-f-]{32,36}$/i;
