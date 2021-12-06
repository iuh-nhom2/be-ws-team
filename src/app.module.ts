import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphqlModule } from './graphql/graphql.module';
import { DatabaseModule } from './database/database.module';
import { ChatModule } from './chat/chat.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { SocketModule } from './socket/socket.module';
import { AuthModule } from './auth/auth.module';
import { AppGateway } from './app.gateway';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    UserModule, 
    GraphqlModule, DatabaseModule, ChatModule, ChatroomModule, SocketModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
