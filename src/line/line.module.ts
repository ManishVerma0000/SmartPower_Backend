import { Module } from '@nestjs/common';
import { LineController } from './line.controller';
import { LineService } from './line.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Line } from './schema/line.schema';
import { LineSchema } from 'src/linemen/schema/linemen.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Line.name, schema: LineSchema }]),
  ],
  controllers: [LineController],
  providers: [LineService],
})
export class LineModule {}
