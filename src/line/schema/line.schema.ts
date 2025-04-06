import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LineDocument = HydratedDocument<Line>;

@Schema()
export class Line {
  @Prop()
  lineName: string;

  @Prop()
  powerHouse: string;

  @Prop()
  district: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(Line);
