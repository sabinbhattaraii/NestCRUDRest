import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Enter Your Name Here',
    type: String,
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Enter Your Email Here',
    type: String,
    example: 'example@admin.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Enter Your Password With More than 6 letters Here',
    type: String,
    example: 'P@ssword123',
  })
  @MinLength(6)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/, {
    message:
      'Password should be at least 6 characters long, include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
  })
  password: string;
}
