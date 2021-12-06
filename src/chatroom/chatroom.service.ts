import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatRoom } from './chatroom.entity';
import { FilterChatRoomDTO } from './dto/filter-chatroom.dto';

@Injectable()
export class ChatroomService {
  constructor(
    @InjectRepository(ChatRoom)
    public readonly chatRoomRepository: Repository<ChatRoom>
  ){}

  public async findAllChatroom(filter: FilterChatRoomDTO): Promise<ChatRoom[]> {
    try{
      const users = await this.chatRoomRepository.find({
        where: {
          id: filter.id,
          name: filter.name
        }
      });
      return users;
    }catch(error) {
      throw new Error('Can not get users')
    }
  }

  public async createRoomChat(data:any): Promise<ChatRoom[]> {
    return this.chatRoomRepository.save(data)
  }
}
