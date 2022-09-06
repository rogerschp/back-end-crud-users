import {
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PASSWORD_RULE_MESSAGE =
  'Password should have 1 upper case, lowcase letter along with a number and special character.';
export class CreateUserDto {
  @IsNotEmpty()
  name_user: string;

  @IsNotEmpty()
  birthday: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(PASSWORD_RULE, { message: PASSWORD_RULE_MESSAGE })
  password: string;

  organizationId: number;

  teacherId: number;
}
