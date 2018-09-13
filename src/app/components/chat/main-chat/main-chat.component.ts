import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../../models/chatMessage';
import { SocketService } from '../../../services/socket.service';
import { UserService } from '../../../services/user.service';
import { UserEventsService } from '../../../services/events/user-events.service';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {

  private messages: Message[];
  private connectedUsername: string;
  private users: string[];

  constructor(private userEventService: UserEventsService, private socketService: SocketService, private userService: UserService) { }

  ngOnInit() {
    this.messages = [];
    this.users = [];
    this.connectedUsername = this.userService.getConnectedUsername();
    this.initChatConnection();
  }

  private initChatConnection(): void {
    this.socketService.initSocket();
    this.socketService.onMessage().subscribe((message: ChatMessage) => {
      console.log(`got message`);
      this.messages.push(new ChatMessage(message.user, message.content));
    });

    this.socketService.onUserConnect().subscribe(user => {
      this.users.push(user);
      this.userEventService.setConnectedUserEvent(user);
    });

    this.socketService.onUserDisconnect().subscribe(disconnectedUser => {
      console.log(`user ${disconnectedUser} disconnected`);
      // tslint:disable-next-line:triple-equals
      this.users = this.users.filter(user => user != disconnectedUser);
      this.userEventService.setDisconnectedUserEvent(disconnectedUser);
    });

    this.socketService.onGetAllUsers().subscribe(users => {
      this.users = users;
    });
  }




}
