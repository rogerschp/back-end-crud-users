import { Teacher } from './entities/teacher.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async createTeacher(CreateTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const { cpf, date_valid, organizationId } = CreateTeacherDto;
    const teacher = await this.teacherRepository.create({
      cpf,
      date_valid,
      organizationId,
    });
    await this.teacherRepository.save(teacher);
    return teacher;
  }

  findAll() {
    return `This action returns all teacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
