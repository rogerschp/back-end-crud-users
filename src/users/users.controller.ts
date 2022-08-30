import { FilterUserDto } from './dto/filter-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get()
  getAllUsers(@Query() FilterUserDto: FilterUserDto): Promise<User[]> {
    return this.usersService.getAllUsers(FilterUserDto);
  }

  @Get('/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() UpdateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, UpdateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
