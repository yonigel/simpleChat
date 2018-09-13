import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../../models/chatMessage';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @Input()
  messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
