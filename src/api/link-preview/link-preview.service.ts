// import axios, { Axios } from 'axios';
import fetch, { RequestInfo, RequestInit, Response } from 'node-fetch';
import parser from 'node-html-parser';
import {
  parseTitle,
  parseDescription,
  parseImg,
  parseDomain,
} from '@src/common/parse';

// const config = {
//   headers: {
//     'Accept-Encoding': '',
//   },
// };

class LinkPreviewService {
  request: (
    url: RequestInfo,
    init?: RequestInit | undefined
  ) => Promise<Response>;

  constructor() {
    this.request = fetch;
  }

  async getMetadata(requestedUrl: string) {
    const url =
      requestedUrl.indexOf('://') === -1
        ? `http://${requestedUrl}`
        : requestedUrl;

    // const { data } = await this.request.get(url, config);
    // const html = parser(data);
    const response = await this.request(url);
    const body = await response.text();
    const html = parser(body);

    const title = parseTitle(html);
    const description = parseDescription(html);
    const img = parseImg(html, url);
    const domain = parseDomain(html, url);

    return { title, description, img, domain, requestUrl: requestedUrl };
  }
}

export default LinkPreviewService;
