import { Controller, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'; // Import with type information



@Controller('test')
export class TestController {
  @Post(':id')
  async create(@Param('id',new ParseUUIDPipe()) id: string):
    Promise<string> {

    return uuidv4();
  }
}