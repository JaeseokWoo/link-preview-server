const axios = require("axios");
const parser = require("node-html-parser");

const getTitle = (dom) => {
  const ogTitle = dom.querySelector('meta[property="og:title"]');
  if (ogTitle !== null) {
    const content = ogTitle.getAttribute("content");
    if (content) {
      return content;
    }
  }

  const twitterTitle = dom.querySelector('meta[name="twitter:title"]');
  if (twitterTitle !== null) {
    const content = twitterTitle.getAttribute("content");
    if (content) {
      return content;
    }
  }

  const title = dom.querySelector("title");
  if (title) {
    return title.text;
  }

  const h1 = dom.querySelector("h1");
  if(h1 !== null) {
    const text = h1.innerText;
    if(text) return text.trim();
  }

  const h2 = dom.querySelector("h2");
  if (h2 !== null) {
    const text = h2.innerText;
    if(text) return text.trim();
  }

  return null;
};

const getDescription = (dom) => {
    const ogDescription = dom.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      const content = ogDescription.getAttribute("content");
      if (content) {
        return content;
      }
    }
  
    const twitterDescription = dom.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription) {
      const content = twitterDescription.getAttribute("content");
      if (content) {
        return content;
      }
    }

    const metaDescription = dom.querySelector('meta[name="description"]');
    if (metaDescription !== null) {
        const content = metaDescription.getAttribute('content');
        if (content) {
            return content;
        }
    }
    return null;
  };

  const getImg = (dom, url) => {
    const ogImg = dom.querySelector('meta[property="og:image"]');
    if (ogImg) {
        const content = ogImg.getAttribute('content');
        if (content) {
            return content;
        }
    }

    const twitterImg = dom.querySelector('meta[name="twitter:image"]');
    if (twitterImg) {
        const content = twitterImg.getAttribute('content');
        if (content) {
            return content;
        }
    }

    const imgs = dom.querySelectorAll('img').reduce((acc, el) => {
        const src = el.getAttribute('src');
        if (!src) return acc;
        acc.push(new URL(src, url).href);
        return acc;
    }, []);
    if (imgs.length) {
        return imgs[0];
    }
    return null;
  };

const config = {
  headers: {
    "Accept-Encoding": "gzip,deflate,br",
  },
};

const getMetadata = async (url) => {
  try {
    const { data } = await axios.get(url, config);
    const html = parser.parse(data);

    const title = getTitle(html);
    const description = getDescription(html);
    const img = getImg(html, url);

    return { title, description, img };
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = getMetadata;
