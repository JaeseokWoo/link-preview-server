import { HTMLElement } from 'node-html-parser';

const parseTitle = (html: HTMLElement) => {
  const ogTitle = html.querySelector('meta[property="og:title"]');
  if (ogTitle?.getAttribute('content')) {
    return ogTitle.getAttribute('content');
  }

  const twitterTitle = html.querySelector('meta[name="twitter:title"]');
  if (twitterTitle?.getAttribute('content')) {
    return twitterTitle.getAttribute('content');
  }

  const title = html.querySelector('title');
  if (title?.text) {
    return title.text;
  }

  const h1 = html.querySelector('h1');
  if (h1?.innerText) {
    return h1.innerText.trim();
  }

  const h2 = html.querySelector('h2');
  if (h2?.innerText) {
    return h2.innerText.trim();
  }

  return '';
};

export default parseTitle;
