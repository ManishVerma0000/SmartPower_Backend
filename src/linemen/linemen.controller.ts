import { Controller } from '@nestjs/common';
import { LinemenService } from './linemen.service';

@Controller('linemen')
export class LinemenController {
  constructor(private readonly lineMenService: LinemenService) {}
  async createLineMen() {}
}
