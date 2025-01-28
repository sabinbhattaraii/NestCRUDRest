import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User Created Successfully' })
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return true;
    } catch (err) {
      throw err;
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({ status: 200, description: 'Get All Users' })
  async findAll() {
    try {
      return true;
    } catch (err) {
      throw err;
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get User By Id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Get User By Id' })
  @ApiResponse({ status: 404, description: 'User Not Found' })
  findOne(@Param('id') id: number) {
    try {
      return true;
    } catch (err) {
      throw err;
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update User' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'User Updated Successfully' })
  @ApiResponse({ status: 404, description: 'User Not Found' })
  update(@Param('id') id: Number, @Body() updateUserDto: UpdateUserDto) {
    try {
      return true;
    } catch (err) {
      throw err;
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'User Deleted Successfully' })
  @ApiResponse({ status: 404, description: 'User Not Found' })
  remove(@Param('id') id: number) {
    try {
      return true;
    } catch (err) {
      throw err;
    }
  }
}
