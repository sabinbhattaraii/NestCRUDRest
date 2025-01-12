import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from 'src/config/config.module';
import { ApiConfigService } from 'src/config/config.service';
import { createDataSource } from './datasource';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [ApiConfigService],
      useFactory: async () => {
        const dataSource = await createDataSource();
        return dataSource.options;
      },
    }),
  ],
})
export class DatabaseModule {}