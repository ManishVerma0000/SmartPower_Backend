import { IsString } from 'class-validator';

export class loginSuperAdminDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
