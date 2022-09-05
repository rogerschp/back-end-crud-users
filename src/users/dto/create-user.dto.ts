import { Organization } from './../../organization/entities/organization.entity';
import { Teacher } from './../../teacher/entities/teacher.entity';
import { IsDate, IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name_user: string;

  @IsNotEmpty()
  birthday: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  organizationId: number;

  teacherId: number;
}
