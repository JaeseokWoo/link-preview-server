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
    'User-Agent':
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
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

    const { data } = await this.request.get(url);
    const html = parser(data);

    const title = parseTitle(html);
    const description = parseDescription(html);
    const img = parseImg(html, url);
    const domain = parseDomain(html, url);

    return { title, description, img, domain, requestUrl: requestedUrl };
  }
}

export default LinkPreviewService;
