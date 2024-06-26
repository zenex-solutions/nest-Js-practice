import { Module } from '@nestjs/common';
import { MongoController } from '../../controller/mongo/Mongo.Controller';

@Module({
  controllers: [MongoController],
})
export class MongoModule {
}