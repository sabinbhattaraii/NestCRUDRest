import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // sets /api as global prefix for all routes in the application
  app.setGlobalPrefix('api');

  app.enableCors(); // cross site origin enabled

  const apiConfigService = app.get(ApiConfigService);

  console.log(
    `Api Started in ${apiConfigService.getValue('HOST')}:${apiConfigService.getValue('PORT')}`,
  );

  await app.listen(apiConfigService.getValue('PORT'));
}
bootstrap();