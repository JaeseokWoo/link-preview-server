import { HTMLElement } from 'node-html-parser';

const parseDescription = (html: HTMLElement) => {
  const ogDescription = html.querySelector('meta[property="og:description"]');
  if (ogDescription?.getAttribute('content')) {
    return ogDescription.getAttribute('content');
  }

  const twitterDescription = html.querySelector(
    'meta[name="twitter:description"]'
  );
  if (twitterDescription?.getAttribute('content')) {
    return twitterDescription.getAttribute('content');
  }

  const metaDescription = html.querySelector('meta[name="description"]');
  if (metaDescription?.getAttribute('content')) {
    return metaDescription.getAttribute('content');
  }

  return '';
};

export default parseDescription;
