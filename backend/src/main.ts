import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  console.log(process.env.NODE_ENV);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
