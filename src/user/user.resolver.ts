import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { CreateUserArgs } from './args/user-create.args';
import * as bcrypt from 'bcrypt';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Resolver(() => UserDTO)
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) { }

  @Query(() => [UserDTO])
  public async users(@Args('userName') userName:string): Promise<UserDTO | any> {
    try {
      const users = await this.userService.findAllUser(userName);
      return users;
    } catch (error) {

    }
  }

  @Mutation(() => UserDTO)
  public async createUser(@Args() args: CreateUserArgs) {
    try {
      const {
        userName,
        password,
        firstName,
        lastName
      } = args;
      const passwordbcrypt = await bcrypt.hash(password, 10);
      console.log(' $userName', args)
      
      const user = await this.userService.createUser({
        userName, password: passwordbcrypt, firstName, lastName
      })
      return user;
    } catch (error) {
      throw new Error('Can not createa new user Data');
    }
  }

}
