import { Body, Controller, Get, ParseBoolPipe, Post, Query, UsePipes } from '@nestjs/common';
import { TestDTO } from '../../dto/TestDTO';
import { createCatSchema } from '../../pipes/schema';
import { ZodValidationPipe } from '../../pipes/ZodValidationPipe';

@Controller('test')
export class TestController {
  @Get()
  async findOne(@Query('id', ParseBoolPipe) id: boolean) {

    console.log(id);
  }


  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  async create(@Body() testDTO: TestDTO) {
    console.log(testDTO);
  }


}