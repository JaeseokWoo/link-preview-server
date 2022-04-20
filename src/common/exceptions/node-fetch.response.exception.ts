import HttpException from './http.exception';

class NodeFetchResponseException extends HttpException {
  constructor(message: string, status: number) {
    super(status, message);
  }
}

export default NodeFetchResponseException;
