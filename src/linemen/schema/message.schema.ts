import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop()
  message: string;

  @Prop()
  description: string;

  @Prop()
  timeIn: string;

  @Prop()
  timeOut: string;

  @Prop()
  line: string;

  @Prop()
  linemen: string;

  @Prop()
  powerHouse: string;

  @Prop()
  district: string;

  @Prop()
  imageUrl: string;

  @Prop({ default: Date.now })
  date: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
