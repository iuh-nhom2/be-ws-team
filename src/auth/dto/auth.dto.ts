import { Field, ID, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class AuthDTO {
    @Field(type => ID)
    readonly id: number;

    @Field({nullable: false})
    userId: string;

    @Field({nullable: false})
    userName: string;

    @Field({nullable: false})
    token: string;
}