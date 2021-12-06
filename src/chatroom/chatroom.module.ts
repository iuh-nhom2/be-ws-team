import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from './chatroom.entity';
import { ChatroomResolver } from './chatroom.resolver';
import { ChatroomService } from './chatroom.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChatRoom])],
  providers: [ChatroomResolver, ChatroomService],
  exports: [ChatroomService]
})
export class ChatroomModule {}
