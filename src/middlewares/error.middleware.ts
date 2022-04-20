import { ErrorRequestHandler } from 'express';
import HttpException from '@src/common/exceptions/http.exception';
import makeResponse from '@src/common/response';

const errorMiddleware: ErrorRequestHandler = (
  err: HttpException,
  req,
  res,
  next
) => {
  const status = err.status || 500;
  const { message } = err;

  res
    .status(status)
    .json(makeResponse({ resultCode: -1, resultMessage: message }));

  next();
};

export default errorMiddleware;
