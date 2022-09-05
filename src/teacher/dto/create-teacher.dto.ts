import { Organization } from './../../organization/entities/organization.entity';
import {
  IsDate,
  IsDateString,
  IsISO8601,
  IsNotEmpty,
  Max,
  Min,
} from 'class-validator';
import { IsNull } from 'typeorm';

export class CreateTeacherDto {
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  date_valid: Date;

  organizationId: number;
}
