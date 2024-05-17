export class TestDTO {
  name: string;
  age: number;
  breed: string;
}

import { IsString, IsInt } from 'class-validator';

export class TestClassDTO {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}