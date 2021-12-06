import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  app.enableCors();
  await app.listen(3000);

  app.use(helmet, csurf(), rateLimit({
    window: 15 * 60 * 1000,
    max: 100,
  }))
}
bootstrap();
