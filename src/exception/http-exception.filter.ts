import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {
  }

  catch(exception: unknown, host: ArgumentsHost): void {

    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    console.log(exception);


    let httpStatus: any;
    let message: any;

    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      const response = exception.getResponse();

      if (exception instanceof HttpException) {
        if (typeof response === 'string') {
          message = response;
        } else if (typeof response === 'object' && response !== null) {
          message = (response as any).message || response;
        }
      } else {
        if (typeof response === 'object' && response !== null) {
          message = (response as any).message;
        } else {
          message = response;
        }
      }
    } else {
      httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
    }


    const responseBody = {
      statusCode: httpStatus,
      message: message,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}