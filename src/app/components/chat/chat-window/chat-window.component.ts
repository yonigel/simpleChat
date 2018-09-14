import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../../models/chatMessage';
import { Message } from '../../../models/message';
import { UserEventsService } from '../../../services/events/user-events.service';
import { EventMessage } from '../../../models/eventMessage';
import { Event } from '../../../enums/events.enum';
import { MessageEventsService } from '../../../services/events/message-events.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @Input()
  messages: Message[];

  @Input()
  connectedUsername: string;

  private element = document.getElementById('chatWindow');

  constructor(private messageEventSerivce: MessageEventsService, private userEventService: UserEventsService) { }

  ngOnInit() {
    this.userEventService.userConnectedEvent.subscribe(user => {
      this.messages.push(new EventMessage(user, Event.userConnected));
      this.scrollBottom();
    });

    this.userEventService.userDisconnectedEvent.subscribe(user => {
      this.messages.push(new EventMessage(user, Event.userLeft));
      this.scrollBottom();
    });

    this.messageEventSerivce.chatMessageSentEvent.subscribe(message => {
      this.scrollBottom();
    });
  }

  private scrollBottom() {
    this.element = document.getElementById('chatWindow');
    this.element.scrollTop = this.element.scrollHeight;
  }

}
