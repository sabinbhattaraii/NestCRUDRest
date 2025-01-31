import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './routes/users/users.module';
import { UserService } from './routes/users/user.service';

@Module({
  imports: [DatabaseModule,AppConfigModule ,UsersModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
