import { Exclude } from 'class-transformer';
import { IsEmail, Matches, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', unique: true })
  @IsEmail()
  email: string;

  @Exclude()
  @MinLength(6)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/, {
    message:
      'Password should be longer than 5 characters, must contain 1 Upper Case Letter, 1 Lower Case Letter, 1 Number and 1 special character.',
  })
  @Column({ type: 'varchar', select: false })
  password: string;

  @Column({ type : 'boolean' , default: false})
  isVerified : boolean;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;

  @DeleteDateColumn({ nullable: true , select : false})
  deleted_on: Date;
}
