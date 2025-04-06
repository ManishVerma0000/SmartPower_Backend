import { IsString } from 'class-validator';

export class CreateLine {
  @IsString()
  lineName: string;
  @IsString()
  powerHouse: string;

  @IsString()
  district: string;
}
