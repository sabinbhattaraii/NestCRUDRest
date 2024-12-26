import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
// import { UsersService } from './users.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [UsersController],
    // providers: [UsersService],
})
export class UsersModule {}