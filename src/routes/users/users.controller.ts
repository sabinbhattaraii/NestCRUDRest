import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return true ;
  }

  @Get()
  findAll() {
    return true;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return true;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return true;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return true;
  }
}
