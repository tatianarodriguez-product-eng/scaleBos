import { UTM_KEYS, type UtmParams } from '@/lib/leads';

const UTM_STORAGE_KEY = 'sb_utm';

// UTM tags from the ad link, kept for the visit so they survive scrolling and reloads
export function readUtm(): UtmParams {
  const fromUrl: UtmParams = {};
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  });
  const hasUrlTags = Object.keys(fromUrl).length > 0;
  try {
    if (hasUrlTags) sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
    return hasUrlTags ? fromUrl : JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || '{}');
  } catch {
    return fromUrl;
  }
}
