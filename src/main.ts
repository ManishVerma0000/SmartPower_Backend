import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties that don't have decorators
      forbidNonWhitelisted: true, // throws error on unknown properties
      transform: true, // automatically transform payloads to DTO instances
    }),
  );
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
