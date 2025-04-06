import { Injectable } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Injectable()
export class FirebaseAuthService {
  private auth: GoogleAuth;

  constructor() {
    // Path to your Firebase Admin SDK service account key
    const keyFilePath = path.resolve(
      __dirname,
      '../../electricity-e3c85-firebase-adminsdk-mpvky-8c9cb34ae5.json',
    );

    // Initialize Google Auth for access token (optional)
    this.auth = new GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });

    // Initialize Firebase Admin SDK
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(require(keyFilePath)),
      });
    }
  }

  // Optional: Get OAuth2 access token (not needed when using admin SDK)
  async getAccessToken(): Promise<string> {
    const client = await this.auth.getClient();
    const accessTokenResponse = await client.getAccessToken();
    return accessTokenResponse.token!;
  }

  // Send notification to device
  async createNotification(sendTokenRequest: {
    token: string;
    title: string;
    body: string;
  }): Promise<string> {
    const { token, title, body } = sendTokenRequest;

    const message = {
      notification: {
        title,
        body,
      },
      android: {
        priority: 'high' as const,
      },
      apns: {
        payload: {
          aps: {
            alert: { title, body },
            sound: 'default',
            contentAvailable: true,
          },
        },
      },
      token,
    };

    try {
      const response = await admin.messaging().send(message);
      console.log('✅ Notification sent:', response);
      return response;
    } catch (error) {
      console.error('❌ Error sending notification:', error);
      throw error;
    }
  }
}
