import { Post } from '@nestjs/common';

export class TestController {
  @Post()
  async create(): Promise<string> {
    return 'ok';
  }
}