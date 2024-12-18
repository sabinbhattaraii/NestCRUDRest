import { DataSource, DataSourceOptions } from 'typeorm';
import { ApiConfigService } from 'src/config/config.service';
import { NestFactory } from '@nestjs/core';
import { AppConfigModule } from 'src/config/config.module';

export async function createDataSource() {
    const app = await NestFactory.createApplicationContext(AppConfigModule);
    const apiConfigService = app.get(ApiConfigService);
  
    const dataSourceOptions: DataSourceOptions = {
      type: 'postgres',
      host: apiConfigService.getValue('POSTGRES_HOST'),
      port: apiConfigService.getValue('POSTGRES_PORT'),
      username: apiConfigService.getValue('POSTGRES_USER'),
      password: apiConfigService.getValue('POSTGRES_PASSWORD'),
      database: apiConfigService.getValue('POSTGRES_DB'),
      entities: [__dirname + '/../src/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations',
      logging: true, 
      synchronize: true,
    }
  
    return new DataSource(dataSourceOptions);
  }