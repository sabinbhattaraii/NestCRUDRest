import { UserEntity } from "src/routes/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('otp')
export class OTPEntity {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expiry : Date;

  @Column({ unique : true})
  otp : string;

  @Column({ default : true})
  active : boolean;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user : UserEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn({ select: false })
  deletedAt?: Date;
}