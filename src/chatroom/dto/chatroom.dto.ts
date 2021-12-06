import { Field, ID, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomDTO {
  @Field(type => ID)
  readonly id:string;

  @Field({nullable: false})
  readonly name: string;

  @Field({nullable: false})
  readonly members: string;

  @Field({nullable: true})
  readonly lastMessage: string;

  @Field({nullable: true})
  readonly userSendLastMessage: string;

  @Field({nullable: true})
  nameUserSendLastMessage: string;

  @Field({nullable: true})
  userCreated: false;
}