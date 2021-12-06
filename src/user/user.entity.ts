import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, BaseEntity, OneToMany, ManyToMany, OneToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id:string;
  
  @Column({ name: 'user_name', nullable: false })
  @IsNotEmpty({ message: "user name not null" })
  userName: string;

  @Column({ name: 'password', nullable: false })
  @IsNotEmpty({ message: "password not null" })
  password: string

  @Column({name: 'first_name', nullable: false})
  @IsNotEmpty({message: 'first name can not null'})
  firstName: string;

  @Column({name: 'last_name', nullable: false})
  @IsNotEmpty({message: 'first name can not null'})
  lastName: string;
}