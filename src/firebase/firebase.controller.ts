import { Body, Controller, Get, Post } from '@nestjs/common';
import { FirebaseAuthService } from './firebase-auth.service';
import { CreateNotificationDto } from './dto/send.token';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  @Get('token')
  async getToken() {
    const token = await this.firebaseAuthService.getAccessToken();
    return { token };
  }

  @Post('token')
  async sendNotification(@Body() sendTokenRequest: CreateNotificationDto) {
    const token = await this.firebaseAuthService.createNotification(sendTokenRequest);
    return { token };
  }
}
