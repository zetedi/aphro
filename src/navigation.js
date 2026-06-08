export function isExternalHref(href) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function navigateTo(href) {
  if (isExternalHref(href)) {
    window.location.href = href;
    return;
  }

  const url = new URL(href, window.location.origin);

  if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
    window.history.pushState({}, "", `${url.pathname}${url.search}`);
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.dispatchEvent(new Event("aphro:navigate"));
}
