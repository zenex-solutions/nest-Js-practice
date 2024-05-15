import { TestController } from '../../controller/test/Test.Controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TestController],
})
export class TestModule {
}