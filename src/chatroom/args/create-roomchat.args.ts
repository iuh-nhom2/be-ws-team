import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class CreateRoomChatArgs {
  @Field(type => String)
  readonly name: string;

  @Field(type => String)
  readonly members: string;

  @Field(type => String)
  readonly lastMessage: string;

  @Field(type => String)
  readonly userSendLastMessage: string;

  @Field(type => String)
  readonly nameUserSendLastMessage: string;

  @Field (type => String) 
  readonly userCreated : string;
}