import { IsString } from 'class-validator';

export class createSuperAdminDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  state: string;
  
}
