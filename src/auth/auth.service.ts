import { Injectable, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'

import { Auth } from './auth.entity';

// import services user jwt services
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { from, Observable, of } from 'rxjs';
import { UserDTO } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) public readonly authRepository: Repository<Auth>,
    private readonly userService: UserService,
    private readonly jwtServices: JwtService
  ) {

  }

  public async login(conditionLogin: any): Promise<Auth[] | any> {
    try {
      // check user login 
      const { userName, password } = conditionLogin;

      const checkUserDTO = await this.userService.findOneByUserName(userName);
      if(!checkUserDTO) {
        throw new HttpException('User does not exit', 400);
      }
      // check password 
      const comparePassword = await bcrypt.compare(password, checkUserDTO.password);

      if (!comparePassword) {
        throw new HttpException('Wrong password !', 402);
      }

      const data = {
        userId: checkUserDTO.id,
        userName: userName,

        token: this.jwtServices.sign(
          {
            userName: userName,
            userId: checkUserDTO.id
          }
        ),
      };

      let inserLogin;
      await this.authRepository.manager.transaction(async tx => {
        inserLogin = await tx.save(
          this.authRepository.create(data)
        )
      })

      if (inserLogin) {
        const dataReponse = this.authRepository.findOne({
          where: { token: data.token }
        })
        return dataReponse;
      } else {
        return [{
          data: null
        }]
      }
    } catch (error) {
      console.log("error", error)
      
    }
  }

  getJwtUser(jwt: string): Observable<UserDTO | null> {
    return from(this.jwtServices.verifyAsync(jwt)).pipe(
      map(({ user }: { user: UserDTO }) => {
        return user;
      }),
      catchError(() => {
        return of(null);
      }),
    );
  }
  
}
