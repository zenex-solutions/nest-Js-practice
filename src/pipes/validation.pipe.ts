import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isBoolean, validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    this.checkValueType(value);
    console.log(isBoolean(value));
    return value;
  }

  checkValueType(value: any) {
// Basic type checks (consider extending for more complex validation)
    if (typeof value === 'string') {
      // Perform string-specific validation (e.g., length checks, pattern matching)
      console.log('Value is a string.');
      // ...
    } else if (typeof value === 'number') {
      // Perform number-specific validation (e.g., range checks)
      console.log('Value is a number.');
      // ...
    } else if (typeof value === 'boolean') {
      // Perform boolean-specific validation (if necessary)
      console.log('Value is a boolean.');
      // ...
    } else if (typeof value === 'object') {
      // Perform object-specific validation (e.g., property checks, nested validation)
      console.log('Value is an object.');
      // ...
    } else {
      // Handle unexpected types or throw an error if strict validation is required
      console.warn(`Received unexpected value type: ${typeof value}`);
      // throw new Error('Invalid value type'); // Consider throwing an error if needed
    }
  }
}

@Injectable()
export class ValidationTESTPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log(value)
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
