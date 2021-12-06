import { Resolver, Query, Mutation, Args, } from '@nestjs/graphql';
import { UserDTO } from 'src/user/dto/user.dto';
import { CreateRoomChatArgs } from './args/create-roomchat.args';
import { ChatroomService } from './chatroom.service';
import { ChatRoomDTO } from './dto/chatroom.dto';
import { FilterChatRoomDTO } from './dto/filter-chatroom.dto';

@Resolver(() => ChatRoomDTO )
export class ChatroomResolver {
  constructor(
    private readonly chatRoomService: ChatroomService
  ) { }

  @Query(()=> [ChatRoomDTO])
  public async chatRoom(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<UserDTO | any> {
    try {
      const chatrooms = await this.chatRoomService.findAllChatroom({
        id,
        name
      });
      return chatrooms;
    } catch (error) {

    }
  }

  @Mutation(() => ChatRoomDTO)
  public async createRoomChat(@Args() args: CreateRoomChatArgs): Promise<ChatRoomDTO | any> {
    try{
      const roomChat = await this.chatRoomService.createRoomChat(args);
      return roomChat;
    }catch(error){
      throw new Error('Can not create room chat');
    }
  }
}
