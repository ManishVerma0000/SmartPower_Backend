import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  profileImageUrl: string;

  @Prop()
  line: string;

  @Prop()
  district: string;

  @Prop({ default: Date.now })
  lastLoginAt: Date;

  @Prop({ default: Date.now })
  profileUpdatedAt: Date;

  @Prop()
  isProfileComplete: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
