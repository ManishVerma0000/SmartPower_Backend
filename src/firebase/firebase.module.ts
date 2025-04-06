import { Module } from '@nestjs/common';
import { FirebaseAuthService } from './firebase-auth.service';
import { FirebaseController } from './firebase.controller';

@Module({
    controllers: [FirebaseController],
  providers: [FirebaseAuthService],
  exports: [FirebaseAuthService],
})
export class FirebaseModule {}
