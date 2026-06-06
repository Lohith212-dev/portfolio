// Remembers the last page the visitor left (and how far they had
// scrolled) so case-study and showcase back buttons can drop them back
// on the exact spot they navigated from — hero, Design Forge, the desk
// section — instead of the top of the homepage.
//
// sessionStorage scopes the memory to the current tab, so a shared link
// opened fresh has no entry and the back button falls back to its
// static href.

const KEY = 'back-return';

export function saveBackReturn(path, scrollY) {
  if (typeof window === 'undefined') return;

  try {
    window.sessionStorage.setItem(KEY, JSON.stringify({ path, scrollY }));
  } catch {
    // Storage unavailable (private mode quirks) — back buttons simply
    // use their static fallback.
  }
}

export function readBackReturn() {
  if (typeof window === 'undefined') return null;

  try {
    const stored = JSON.parse(window.sessionStorage.getItem(KEY));

    if (!stored || typeof stored.path !== 'string' || typeof stored.scrollY !== 'number') {
      return null;
    }

    return stored;
  } catch {
    return null;
  }
}
