import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Auth } from './auth.entity';
import { AuthenticationStrategy } from './strategy/auth.strategy'
import { authConfig } from '../config/authConfig'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Auth]),
    JwtModule.register({
      secret: authConfig.secretKeys.jwt,
      signOptions: {
        expiresIn: '7d'
      }
    }),
    UserModule
  ],
  providers: [AuthService, AuthResolver, AuthenticationStrategy],
  exports: [AuthService]
})
export class AuthModule {}
