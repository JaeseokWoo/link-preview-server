import { ErrorRequestHandler } from 'express';
import HttpException from '@src/common/exceptions/http.exception';

const errorMiddleware: ErrorRequestHandler = (
  err: HttpException,
  req,
  res,
  next
) => {
  const status = err.status || 500;
  const { message } = err;

  res.status(status).send({
    message,
  });

  next();
};

export default errorMiddleware;
