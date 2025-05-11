import { IsArray, IsString } from 'class-validator';

export class CreateLineMen {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  profileImageUrl: string;

  @IsString()
  district: string;

  @IsString()
  state: string;

  @IsArray()
  @IsString({ each: true }) // ✅ Ensures every item in the array is a string
  line: string[];
}
