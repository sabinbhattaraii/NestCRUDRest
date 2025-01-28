import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * Create User
   *  @param dto
   *  @return user
   *  */
  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return await this.userRepository.save(createUserDto);
  }

  /**
   * Find all users
   * @return users
   */
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  /**
   * Find one user
   * @param id
   * @return user
   */
  async findOne(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({
        where: { id },
    });
  }

  /**
   * Update User
   * @param id
   * @param dto
   */
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    await this.userRepository.update(id, updateUserDto);
    return await this.userRepository.findOne({
        where: { id },
    });
  }

  /**
   * Delete User
   * @param id
   */
  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}