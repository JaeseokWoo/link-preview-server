import { Response } from 'node-fetch';
import NodeFetchResponseException from '../exceptions/node-fetch.response.exception';

function checkNodeFetchResponseStatus(response: Response) {
  if (response.ok) {
    return response;
  }
  throw new NodeFetchResponseException(response.statusText, response.status);
}

export default checkNodeFetchResponseStatus;
