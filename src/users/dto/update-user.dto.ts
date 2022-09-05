import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  name_user: string;
  @IsNotEmpty()
  birthday: Date;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  organizationId: number;
  @IsNotEmpty()
  teacherId: number;
}
