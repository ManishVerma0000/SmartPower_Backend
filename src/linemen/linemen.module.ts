import { Module } from '@nestjs/common';
import { LinemenController } from './linemen.controller';
import { LinemenService } from './linemen.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LineMen, LineMenSchema } from './schema/linemen.schema';
import { Message, MessageSchema } from './schema/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LineMen.name, schema: LineMenSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [LinemenController],
  providers: [LinemenService],
})
export class LinemenModule {}
