import { Component, OnInit } from '@angular/core';
import { Message } from '../../../models/message';
import { SocketService } from '../../../services/socket.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {

  private chatMessages: Message[];
  private connectedUsername: string;
  private users: string[];

  constructor(private socketService: SocketService, private userService: UserService) { }

  ngOnInit() {
    this.chatMessages = [];
    this.users = [];
    this.connectedUsername = this.userService.getConnectedUsername();
    this.initChatConnection();
  }

  private initChatConnection(): void {
    this.socketService.initSocket();
    this.socketService.onMessage().subscribe((message: Message) => {
      console.log(`got message`);
      this.chatMessages.push(new Message(message.user, message.content));
    });

    this.socketService.onUserConnect().subscribe(user => {
      this.users.push(user);
    });

    this.socketService.onUserDisconnect().subscribe(disconnectedUser => {
      console.log(`user ${disconnectedUser} disconnected`);
      // tslint:disable-next-line:triple-equals
      this.users = this.users.filter(user => user != disconnectedUser);
    });

    this.socketService.onGetAllUsers().subscribe(users => {
      this.users = users;
    });
  }




}
