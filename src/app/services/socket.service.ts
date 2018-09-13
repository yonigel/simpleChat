import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chatMessage';
import { UserService } from './user.service';
import { Event } from '../enums/events.enum';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  constructor(private userService: UserService) { }

  private sendUsername() {
    this.socket.emit('setUsername', this.userService.getConnectedUsername());
  }

  public initSocket(): void {
    this.socket = socketIo();
    this.sendUsername();
  }

  public sendMessage(message: ChatMessage): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<ChatMessage> {
    return new Observable<ChatMessage>(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      });
    });
  }

  public onUserConnect(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on(Event.userConnected, connectedUser => {
        observer.next(connectedUser);
      });
    });
  }

  public onUserDisconnect(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on(Event.userLeft, userLeft => {
        observer.next(userLeft);
      });
    });
  }

  public onGetAllUsers(): Observable<string[]> {
    return new Observable<string[]>(observer => {
      this.socket.on(Event.getConnectedUsers, users => {
        observer.next(users);
      });
    });
  }
}
