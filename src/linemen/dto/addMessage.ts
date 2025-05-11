import { IsOptional, IsString } from 'class-validator';

export class AddMessage {
  @IsString()
  message: string;

  @IsString()
  description: string;

  @IsString()
  timeIn: Date;

  @IsString()
  timeOut: Date;

  @IsString()
  district: string;

  @IsString()
  line: string;

  @IsString()
  powerHouse: string;

  @IsOptional()
  @IsString() // or remove this and just handle as file upload
  imageUrl?: any;

  @IsString()
  lineMen: string;
}
