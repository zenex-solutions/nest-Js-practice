import { Controller, Post } from '@nestjs/common';

@Controller('mongo')
export class MongoController {
  @Post()
  async save(): Promise<string> {

    return 'ok-mongo';
  }
}