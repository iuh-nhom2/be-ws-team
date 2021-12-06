import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('chat')
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column({ name: 'room_chat_id', nullable: false })
  @IsNotEmpty({message: 'roomchatid not null'})
  roomChatId: string;

  @Column({ name: 'message', nullable: false })
  @IsNotEmpty({message: "message not null"})
  message: string;

  @Column({name: 'created_date', nullable: false})
  @IsNotEmpty({message: "created_date not null"})
  createdDate: Date;
  
  @Column({name: 'user_send_message'})
  @IsNotEmpty({message: "user send message not null"})
  userSendMessage: string;
} 