import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from 'src/config/config.module';
import { ApiConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [ApiConfigService],
      useFactory: (apiConfigService: ApiConfigService) => ({
        type : 'postgres',
        host: apiConfigService.getValue('POSTGRES_HOST'),
        port: apiConfigService.getValue('POSTGRES_PORT'),
        username: apiConfigService.getValue('POSTGRES_USER'),
        password: apiConfigService.getValue('POSTGRES_PASSWORD'),
        database: apiConfigService.getValue('POSTGRES_DB'),
        autoLoadEntities: true, // Automatically load entities
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'], // Ensure migrations are included
        migrationsTableName: 'migrations',
        logging: true,
        synchronize: false, // Synchronize schema 
      }),
      dataSourceFactory : async (options) => {
        const dataSource = new DataSource(options)
        await dataSource.initialize()
        .then(() => {
          console.log('Data Source has been initialized!');
        })
        .catch((err) => {
          console.error('Error during Data Source initialization:', err);
        });
        return dataSource;
      },
    }),
  ],
})
export class DatabaseModule {}