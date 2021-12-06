import { Field, ID, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class FilterChatRoomDTO {
  @Field(type => ID)
  readonly id:string;

  @Field({nullable: false})
  readonly name: string;
}