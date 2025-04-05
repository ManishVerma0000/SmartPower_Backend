import { Module } from '@nestjs/common';
import { LinemenController } from './linemen.controller';
import { LinemenService } from './linemen.service';

@Module({
  controllers: [LinemenController],
  providers: [LinemenService]
})
export class LinemenModule {}
