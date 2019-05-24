import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Provide cors options for app.enableCors()
  //   We should be able to set cors options, e.g:
  // links: https://github.com/nestjs/nest/issues/457
  //          https://github.com/expressjs/cors#configuration-options  
  app.enableCors({
    allowedHeaders: ['Location']
  });

  await app.listen(3000);
}
bootstrap();
