import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LineMenDocument = HydratedDocument<LineMen>;

@Schema()
export class LineMen {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  profileImageUrl: string;

  @Prop([String])
  line: string[];

  @Prop()
  district: string;

  @Prop()
  state: string;

  @Prop({ default: Date.now })
  lastLoginAt: Date;

  @Prop({ default: Date.now })
  profileUpdatedAt: Date;

  @Prop()
  isProfileComplete: boolean;
}

export const LineMenSchema = SchemaFactory.createForClass(LineMen);
