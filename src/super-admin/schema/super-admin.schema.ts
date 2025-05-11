import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SuperAdminDocument = HydratedDocument<SuperAdmin>;

@Schema()
export class SuperAdmin {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  state: string;

  @Prop({ default: true })
  isSuperAdmin: boolean;
}

export const SuperAdminSchema = SchemaFactory.createForClass(SuperAdmin);
