import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength, IsOptional, IsEmail } from 'class-validator'

@ArgsType()
export class CreateAuthArgs {
    @Field(type => String)
    @IsNotEmpty()
    readonly userName: string;

    @Field(type => String)
    @IsNotEmpty()
    readonly password: string;
}