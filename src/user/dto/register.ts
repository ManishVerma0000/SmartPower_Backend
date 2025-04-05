import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  profileImageUrl: string;

  @IsString()
  line: string;

  @IsString()
  district: string;
}
