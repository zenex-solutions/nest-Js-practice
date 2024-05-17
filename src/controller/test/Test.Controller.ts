import { Controller, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Post(':id')
  async create(@Param('id', new ParseIntPipe(
    { errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number):
    Promise<string> {
    return id.toString();
  }
}