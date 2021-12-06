import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, BaseEntity, OneToMany, ManyToMany, OneToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'user_id', nullable: false })
  @IsNotEmpty({ message: "user id not null" })
  userId: string;

  @Column({ name: 'userName', nullable: false })
  @IsNotEmpty({ message: "user id not null" })
  userName: string;

  @Column({ name: 'token', nullable: false })
  @IsNotEmpty({ message: "token is not empty" })
  token: string;
}