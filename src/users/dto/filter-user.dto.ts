import { IsEmail, IsNotEmpty } from 'class-validator';

export class FilterUserDto {
  @IsNotEmpty()
  name_user: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
