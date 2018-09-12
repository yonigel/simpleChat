import { Component, OnInit } from '@angular/core';
import { Message } from '../../../models/message';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent implements OnInit {

  private chatMessages: Message[];

  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }

  private initChatConnection(): void {

  }

  private sendMessage(messasge: Message): void {

  }



}
