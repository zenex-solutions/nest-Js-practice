import { APP_FILTER, NestFactory } from '@nestjs/core';
import { MongoModule } from './module/mongo/Mongo.Module';
import { TestModule } from './module/test/Test.Module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/Logger.Middleware';
import { TestController } from './controller/test/Test.Controller';
import { AllExceptionsFilter } from './exception/http-exception.filter';



@Module({
  imports: [MongoModule, TestModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(TestController);
  }
}

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
