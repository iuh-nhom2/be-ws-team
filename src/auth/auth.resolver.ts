import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service'
import  * as bcrypt from 'bcrypt'
import { AuthDTO } from './dto/auth.dto';
import { UserDTO } from 'src/user/dto/user.dto';
import { CreateAuthArgs } from './args/auth-create.args'
import { HttpException } from '@nestjs/common';
import { authConfig } from "../config/authConfig"

@Resolver(()=> AuthDTO)
export class AuthResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {
        
    }

    @Mutation(() => AuthDTO)
    public async userLogin(@Args() args: CreateAuthArgs ) : Promise<AuthDTO[] | any> {
        try {
            const condition = {...args, banDit: false }
            console.log("authConfig.secretKeys.jwt", authConfig.secretKeys.jwt)
            console.log("condition", condition)
            const resultLogin = await this.authService.login(condition)
            console.log("resultLogin", resultLogin)
            if(resultLogin){
                return resultLogin;
            }else {
                throw new HttpException(" LOgin Fieled", 403)
            }
        } catch(error) {
            throw new HttpException(" LOgin Fieled", 403)
        }
    } 


}
