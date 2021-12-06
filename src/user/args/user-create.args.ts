import { ArgsType, Field } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength, MinLength, IsOptional, IsEmail } from 'class-validator'
import { type } from 'os';

@ArgsType()
export class CreateUserArgs {
    @Field(type => String)
    @IsNotEmpty()
    readonly userName: string;

    @Field(type => String)
    @IsNotEmpty()
    readonly password: string;

    @Field(type => String) 
    @IsNotEmpty()
    readonly firstName: string;

    @Field(type => String) 
    @IsNotEmpty()
    readonly lastName: string;

}