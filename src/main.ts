import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './config/config.service';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // extracts the first validation error message from a validation error object
  const getConstraintMessage = (obj: any) => {
    if (obj.constraints) {
      return Object.values(obj.constraints)[0];
    } else if (obj.children && obj.children.length > 0) {
      return getConstraintMessage(obj.children[0]);
    } else {
      return 'Nested Validation error';
    }
  };

  // sets /api as global prefix for all routes in the application
  app.setGlobalPrefix('api');

  // ValidationPipe ensures that all incoming requests are validated against the defined DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.map((error) => {
          const msg =
            error.children.length > 0
              ? getConstraintMessage(error.children[0])
              : Object.values(error.constraints)[0];
          return {
            property: error.property,
            message: msg,
          };
        });
        return new BadRequestException(result);
      },
      stopAtFirstError: true,
    }),
  );

  app.enableCors(); // cross site origin enabled

  const apiConfigService = app.get(ApiConfigService);

  console.log(
    `Api Started in ${apiConfigService.getValue('HOST')}:${apiConfigService.getValue('PORT')}`,
  );

  await app.listen(apiConfigService.getValue('PORT'));
}
bootstrap();