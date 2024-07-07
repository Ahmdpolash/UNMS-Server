import { Request, Response, NextFunction } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  response: Response,
  next: NextFunction,
) => {
  response.status(err.status || 500).json({
    success: false,
    message: err.message || 'something went wrong',
    error: err,
  });

  next();
};

export default globalErrorHandler;
