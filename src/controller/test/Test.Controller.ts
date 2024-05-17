import { Controller, Get, ParseBoolPipe, Query } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  async findOne(@Query('id', ParseBoolPipe) id: boolean) {

    console.log(id);
  }
}