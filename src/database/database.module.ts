import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from 'src/config/config.module';
import { ApiConfigService } from 'src/config/config.service';

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
        migrations: ['src/migrations/*{.ts,.js}'], // Ensure migrations are included
        migrationsTableName: 'migrations',
        logging: true,
        synchronize: true, // Synchronize schema 
      }),
    }),
  ],
})
export class DatabaseModule {}