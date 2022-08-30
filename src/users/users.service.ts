import { FilterUserDto } from './dto/filter-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const { name_user, birthday, email, password } = CreateUserDto;
    const users = this.userRepository.create({
      name_user,
      birthday,
      email,
      password,
    });

    await this.userRepository.save(users);
    return users;
  }

  async getAllUsers(FilterUserDto: FilterUserDto): Promise<User[]> {
    const { name_user, email } = FilterUserDto;
    const query = await this.userRepository.createQueryBuilder('user');
    const users = await query.getMany();

    if (name_user) {
      query.andWhere('user.name_user = :name_user', { name_user });
    }

    if (email) {
      query.andWhere('LOWER(user.email) LIKE  LOWER(:email)', {
        email: `%${email}%`,
      });
    }

    return users;
  }

  async getUserById(id: number): Promise<User> {
    const found = await this.userRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`User with ID "${id}" not found.`);
    }

    return found;
  }

  async updateUser(id: number, UpdateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.getUserById(id);
    delete user.password;
    delete user.email;

    const update = Object.assign(user, UpdateUserDto);
    return await this.userRepository.save(update);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
