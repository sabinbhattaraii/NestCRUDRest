import { DataSource, DataSourceOptions } from 'typeorm';
import { ApiConfigService } from 'src/config/config.service';
import { NestFactory } from '@nestjs/core';
import { AppConfigModule } from 'src/config/config.module';

export async function createDataSource(): Promise<DataSource> {
  const app = await NestFactory.createApplicationContext(AppConfigModule);
  const apiConfigService = app.get(ApiConfigService);

  const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: apiConfigService.getValue('POSTGRES_HOST'),
    port: apiConfigService.getValue('POSTGRES_PORT'),
    username: apiConfigService.getValue('POSTGRES_USER'),
    password: apiConfigService.getValue('POSTGRES_PASSWORD'),
    database: apiConfigService.getValue('POSTGRES_DB'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'], // Ensure migrations are included
    migrationsTableName: 'migrations',
    logging: true,
    synchronize: false, // Synchronize schema
  };
  const dataSource = new DataSource(dataSourceOptions);
  dataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });
  return dataSource;
}

export const AppDataSource = createDataSource();