import { IsString } from 'class-validator';

export class loginAdminDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
