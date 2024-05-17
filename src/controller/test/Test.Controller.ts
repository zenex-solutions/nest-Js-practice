import { Body, Controller, Get, ParseBoolPipe, Post, Query, UsePipes } from '@nestjs/common';
import { TestClassDTO, TestDTO } from '../../dto/TestDTO';
import { createCatSchema } from '../../pipes/schema';
import { ZodValidationPipe } from '../../pipes/ZodValidationPipe';
import { ValidationTESTPipe } from '../../pipes/validation.pipe';

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
  @Post('vali')
  async classValidator(@Body(new ValidationTESTPipe()) testDTO:TestClassDTO) {
    console.log(testDTO);
  }


}