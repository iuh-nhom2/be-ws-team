import { Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets/interfaces/hooks';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit ,OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  server: Server;
  private logger: Logger = new Logger('ChatGateWay');

  afterInit(server:Server){
    this.logger.log('init');
  }

  handleConnection(socket: Socket ){
    console.log('connection');
    this.logger.log(`Client connected: ${socket.id}`)
  }

  handleDisconnect(socket: Socket){
    console.log('disconection')
    this.logger.log(`Client connected: ${socket.id}`)
  }

  @SubscribeMessage('sendMessage')
  handleMessage(socket: Socket, message: string){
    this.server.emit('newMessage',  message, socket.id);  
  }
}
   