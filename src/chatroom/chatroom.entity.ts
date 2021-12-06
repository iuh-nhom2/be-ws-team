import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, BaseEntity, OneToMany, ManyToMany, OneToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('chatroom')
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column({ name: 'name' })
  name: string;
  
  @Column({ name: 'members' })
  members: string;

  @Column({name: 'last_message'})
  lastMessage: string;

  @Column({name: 'user_send_last_message'})
  userSendLastMessage: string;

  @Column({name: 'name_user_send_last_mesage'})
  nameUserSendLastMessage: string;

  @Column({name: 'user_created'})
  userCreated: string;
  
}