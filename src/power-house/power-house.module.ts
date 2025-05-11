import { Module } from '@nestjs/common';
import { PowerHouseController } from './power-house.controller';
import { PowerHouseService } from './power-house.service';

@Module({
  controllers: [PowerHouseController],
  providers: [PowerHouseService]
})
export class PowerHouseModule {}
