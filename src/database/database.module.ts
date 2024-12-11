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
        host: apiConfigService.getValue('DATABASE_HOST'),
        port: apiConfigService.getValue('DATABASE_PORT'),
        username: apiConfigService.getValue('DATABASE_USER'),
        password: apiConfigService.getValue('DATABASE_PASSWORD'),
        database: apiConfigService.getValue('DATABASE_NAME'),
        autoLoadEntities: true, // Automatically load entities
        synchronize: true, // Synchronize schema (use cautiously in production)
      }),
    }),
  ],
})
export class DatabaseModule {}