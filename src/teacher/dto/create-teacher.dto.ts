import {
  IsDate,
  IsDateString,
  IsISO8601,
  IsNotEmpty,
  Max,
  Min,
} from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  @IsDate()
  date_valid: Date;
}
