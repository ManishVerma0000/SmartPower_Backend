import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  email: string;
  @IsString()
  line: string;
}
