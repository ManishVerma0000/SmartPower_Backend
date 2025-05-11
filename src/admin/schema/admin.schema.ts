import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  district: string;

  @Prop()
  state: string;

  @Prop({ default: Date.now })
  lastLoginAt: Date;
  @Prop({ default: Date.now })
  profileUpdatedAt: Date;
  @Prop({ default: true })
  isAdmin: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
