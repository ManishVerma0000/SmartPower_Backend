import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URI}`, {
      connectionFactory: (connection) => {
        connection.once('open', () =>
          console.log('✅ MongoDB Connected Successfully!'),
        );
        connection.on('error', (err) =>
          console.error('❌ MongoDB Connection Error:', err),
        );
        return connection;
      },
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
