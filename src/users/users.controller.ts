import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userData: Partial<User>) {
    return this.usersService.update(id, userData);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usersService.remove(id);
    return "User removed successfully"
  }
}
