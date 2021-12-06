import { Field, ID, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class UserDTO {
    @Field(type =>  ID) 
    readonly id: string;

    @Field({nullable: false})
    readonly userName: string;

    @Field({nullable: false})
    readonly firstName: string;

    @Field({nullable: false})
    readonly lastName: string;
}