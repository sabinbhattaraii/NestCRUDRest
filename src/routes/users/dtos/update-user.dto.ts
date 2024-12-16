import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Enter Your Name Here',
    type: String,
    example: 'John Doe',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Enter Your Email Here',
    type: String,
    example: 'example@admin.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Enter Your Password With More than 6 letters Here',
    type: String,
    example: 'P@ssword123',
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/, {
    message:
      'Password should be at least 6 characters long, include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
  })
  password?: string;

  @ApiProperty({
    description: 'Enter Your Boolean For whether the user is verified or not',
    type: Boolean,
    example: true || false,
  })
  @IsOptional()
  isVerified?: boolean;
}