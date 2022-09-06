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
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-users')
  createUser(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get('/getAll/:id')
  getAllUsers(@Param('id') organizationId: number): Promise<User[]> {
    return this.usersService.getAllUsers(organizationId);
  }

  @Get('/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  updateUser(
    @Param('/updateUser/id') id: number,
    @Body() UpdateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, UpdateUserDto);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
