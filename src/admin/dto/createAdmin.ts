import { IsString } from 'class-validator';

export class createAdminDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  state: string;
  @IsString()
  district: string;
}
