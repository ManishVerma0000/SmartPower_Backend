import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LinemenModule } from './linemen/linemen.module';
import { DatabaseModule } from './database/conn';
import { LineModule } from './line/line.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [AdminModule, UserModule, LinemenModule,DatabaseModule, LineModule,FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
