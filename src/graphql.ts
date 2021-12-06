
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserDTO {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
}

export class ChatRoomDTO {
    id: string;
    name: string;
    members: string;
    lastMessage?: string;
    userSendLastMessage?: string;
    nameUserSendLastMessage?: string;
    userCreated?: boolean;
}

export class AuthDTO {
    id: string;
    userId: string;
    userName: string;
    token: string;
}

export abstract class IQuery {
    abstract users(userName: string): UserDTO[] | Promise<UserDTO[]>;

    abstract chatRoom(name: string, id: string): ChatRoomDTO[] | Promise<ChatRoomDTO[]>;
}

export abstract class IMutation {
    abstract createUser(userName: string, password: string, firstName: string, lastName: string): UserDTO | Promise<UserDTO>;

    abstract createRoomChat(name: string, members: string, lastMessage: string, userSendLastMessage: string, nameUserSendLastMessage: string, userCreated: string): ChatRoomDTO | Promise<ChatRoomDTO>;

    abstract userLogin(userName: string, password: string): AuthDTO | Promise<AuthDTO>;
}
