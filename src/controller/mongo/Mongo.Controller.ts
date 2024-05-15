import { Post } from '@nestjs/common';

export class MongoController{
  @Post()
  async save(): Promise<string> {

    return 'ok';
  }
}