import axios, { Axios } from 'axios';
import parser from 'node-html-parser';
import {
  parseTitle,
  parseDescription,
  parseImg,
  parseDomain,
} from '@src/common/parse';

const config = {
  headers: {
    'Accept-Encoding': 'gzip,deflate,br',
  },
};

class LinkPreviewService {
  request: Axios;

  constructor() {
    this.request = axios.create(config);
  }

  async getMetadata(requestedUrl: string) {
    const url =
      requestedUrl.indexOf('://') === -1
        ? `http://${requestedUrl}`
        : requestedUrl;

    const { data } = await this.request.get(url, config);
    const html = parser(data);

    const title = parseTitle(html);
    const description = parseDescription(html);
    const img = parseImg(html, url);
    const domain = parseDomain(html, url);

    return { title, description, img, domain };
  }
}

export default LinkPreviewService;
