import { Teacher } from './../teacher/entities/teacher.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    @InjectRepository(Teacher)
    private teacherRepostory: Repository<Teacher>,
  ) {}

  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const { name_user, birthday, email, password, organizationId, teacherId } =
      CreateUserDto;

    await this.getUserByEmail(email);

    const users = this.userRepository.create({
      name_user,
      birthday,
      email,
      password,
      organizationId,
      teacherId,
    });

    await this.userRepository.save(users);

    return users;
  }

  async getAllUsers(id: number): Promise<User[]> {
    const query = await this.userRepository.find({
      where: { organizationId: id },
      relations: ['teacher'],
    });
    return query;
  }

  async getUserById(id: number): Promise<User> {
    const found = await this.userRepository.findOne({ where: { id } });
    if (!found) {
      throw new HttpException(
        `User with ID "${id}" not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return found;
  }

  async getUserByEmail(email: string): Promise<User> {
    const query = await this.userRepository.findOne({ where: { email } });

    if (query) {
      throw new HttpException(
        'E-mail already on database',
        HttpStatus.BAD_REQUEST,
      );
    }
    return query;
  }

  async updateUser(id: number, UpdateUserDto: UpdateUserDto): Promise<User> {
    const { name_user, birthday, email, password, organizationId, teacherId } =
      UpdateUserDto;
    const users = this.userRepository.create({
      name_user,
      birthday,
      email,
      password,
      organizationId,
      teacherId,
    });

    await this.userRepository.save(users);

    return users;
  }

  async deleteUser(id: number) {
    const users = await this.getUserById(id);
    if (users?.teacherId) {
      console.log(this.teacherRepostory.findBy({ id: 1 }));
      await this.teacherRepostory.softDelete(id);
    }
    try {
      await this.userRepository.softDelete(id);
    } catch {
      throw new HttpException(
        `Error deleting user "${id}"`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
