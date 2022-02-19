import { HTMLElement } from 'node-html-parser';

const parseImg = (html: HTMLElement, url: string) => {
  const ogImg = html.querySelector('meta[property="og:image"]');
  if (ogImg?.getAttribute('content')) {
    return ogImg.getAttribute('content');
  }

  const twitterImg = html.querySelector('meta[name="twitter:image"]');
  if (twitterImg?.getAttribute('content')) {
    return twitterImg.getAttribute('content');
  }

  const imgs = html.querySelectorAll('img').reduce((acc, el) => {
    const src = el.getAttribute('src');
    if (!src) return acc;

    acc.push(new URL(src, url).href);
    return acc;
  }, [] as string[]);

  if (imgs.length) {
    return imgs[0];
  }

  return null;
};

export default parseImg;
