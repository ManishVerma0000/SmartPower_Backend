import { Module } from '@nestjs/common';
import { SuperAdminController } from './super-admin.controller';
import { SuperAdminService } from './super-admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperAdmin, SuperAdminSchema } from './schema/super-admin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SuperAdmin.name, schema: SuperAdminSchema },
    ]),
  ],
  controllers: [SuperAdminController],
  providers: [SuperAdminService],
})
export class SuperAdminModule {}
