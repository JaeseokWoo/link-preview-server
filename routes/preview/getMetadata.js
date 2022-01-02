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
  return null;
};

const getDescription = (dom) => {
    const ogDescription = dom.querySelector('meta[property="og:description"]');
    if (ogDescription !== null) {
      const content = ogDescription.getAttribute("content");
      if (content) {
        return content;
      }
    }
  
    const twitterDescription = dom.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription !== null) {
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

    return { title, description };
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = getMetadata;
