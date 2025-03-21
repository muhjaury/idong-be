import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,POST',
  });
  await app.listen(process.env.NEXT_PUBLIC_TYPE !== 'prod' ? 3001 : 3000);
}
bootstrap();
