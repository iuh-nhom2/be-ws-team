import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { authConfig } from '../../config/authConfig'

@Injectable()
export class AuthenticationStrategy extends PassportStrategy(Strategy, 'jwt') {
    /**
     * @description logger
     * @private
     * @memberof AuthStrategy
     */
    private logger =  new Logger(AuthenticationStrategy.name);
    
    constructor(){
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey: authConfig.secretKeys.jwt,
            }
        )
        console.log("authConfig.secretKeys.jwt", authConfig.secretKeys.jwt)
    }

    /**
   * @description
   *  - Initialize Strategy for Restaurant authentication with specified name
   *  - Constuctor will active when receive context from Guard
   *  - After Strategy Initialized then validate the payload parse from context
   *  - Return validated result to Guard
   * @author Le Tuan Kiet (letuankietdhth@gmail.com)
   * @date 2020-08-09
   * @param {*} req
   * @param {*} payload
   * @param {function} callback
   * @returns
   * @memberof Authentication User
   */
    public async validate(req, payload:any, callback) {
        return {
            
        } // make laidation paloady and reponse  
    }
}