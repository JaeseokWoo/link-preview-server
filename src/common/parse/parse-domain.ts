import { HTMLElement } from 'node-html-parser';

const parseDomain = (html: HTMLElement, url: string) => {
  const canonical = html.querySelector('link[rel=canonical]');
  if (canonical?.getAttribute('href')) {
    return canonical.getAttribute('href');
  }

  const ogUrl = html.querySelector('meta[property="og:url"]');
  if (ogUrl?.getAttribute('content')) {
    const content = ogUrl.getAttribute('content');
    if (content) {
      return new URL(content).hostname.replace('www.', '');
    }
  }

  return new URL(url).hostname.replace('www.', '');
};

export default parseDomain;
