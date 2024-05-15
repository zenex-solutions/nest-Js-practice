import { NestFactory } from '@nestjs/core';
import { MongoModule } from './module/mongo/Mongo.Module';
import { TestModule } from './module/test/Test.Module';
import { Module } from '@nestjs/common';


@Module({
  imports: [MongoModule, TestModule],
})
export class AppModule {}

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
