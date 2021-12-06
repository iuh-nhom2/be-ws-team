import { Injectable, Query } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>
  ) { }

  public async findAllUser(userName: string): Promise<User[]> {
    try {
      if (userName && userName !== '') {
        return this.userRepository.find({
          where: {
            userName: userName,
          
          }
        })
      }
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      throw new Error('Can not get users')
    }
  }

  public async findOneByUserName(userName: string): Promise<User> {
    return this.userRepository.findOne({
      where: { userName }
    })
  }

  public async filterUser(filter: any) {
    try {
      return this.userRepository.find({
        where: {
          userName: filter.userName,
          id: filter.id,
          firstName: filter.firstName,
          lastName: filter.lastName
        }
      })
    } catch {

    }
  }

  public async createUser(data: any): Promise<User[]> {
    return this.userRepository.save(data)
  }

}
