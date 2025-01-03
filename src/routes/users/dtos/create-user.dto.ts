import { Gender, UserRole } from '@/common/enums/user-role.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Enter Your First Name Here',
    type: String,
    example: 'John',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Enter Your Middle Name Here',
    type: String,
    example: 'Prased',
    required: false,
  })
  @IsOptional()
  @IsString()
  middleName: string;

  @ApiProperty({
    description: 'Enter Your Last Name Here',
    type: String,
    example: 'Doe',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

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

  @ApiProperty({
    description: 'Enter Your Gender Here From the Enum',
    enum: Gender,
    required: true,
  })
  @IsEnum(Gender, { message: 'Gender should be Male, Female, or Other' })
  @IsNotEmpty()
  @IsString()
  gender: Gender;

  @ApiProperty({
    description: 'Enter Your Address Here',
    type: String,
    example: '123 Main St.',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    description: 'Enter Your Shipping Address Here',
    type: String,
    example: '123 Main St.',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  shippingAddress: string;

  @ApiProperty({
    description: 'Enter Your Contact Number Here',
    type: String,
    example: '1234567890',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  contactNumber: string;

  @ApiProperty({
    description: 'Enter Your Country Here',
    type: String,
    example: 'USA',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty({
    description: 'Enter Your City Here',
    type: String,
    example: 'New York',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: 'Enter Your Role Here',
    enum: UserRole,
  })
  @IsEnum(UserRole, { message: 'Role should be User or Admin' })
  @IsNotEmpty()
  @IsString()
  role: UserRole;

  @ApiProperty({
    description: 'Enter Your Verification Status Here',
    type: Boolean,
    example: false,
    required: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  isVerified: boolean;
}