import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


async function bootstrap() {
//  const APP_DIRECTORY = resolve(__dirname, '..');

//  const app = await NestFactory.create(AppModule);

  // Provide cors options for app.enableCors()
  //   We should be able to set cors options, e.g:
  // links: https://github.com/nestjs/nest/issues/457
  //          https://github.com/expressjs/cors#configuration-options  
//  app.enableCors({
//    allowedHeaders: ['Location']
//  });

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors({
    allowedHeaders: ['Location']
  });

  await app.listen(3000);
}
bootstrap();
