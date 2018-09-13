import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../../models/chatMessage';
import { Message } from '../../../models/message';
import { UserEventsService } from '../../../services/events/user-events.service';
import { EventMessage } from '../../../models/eventMessage';
import { Event } from '../../../enums/events.enum';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @Input()
  messages: Message[];

  constructor(private userEventService: UserEventsService) { }

  ngOnInit() {
    this.userEventService.userConnectedEvent.subscribe(user => {
      this.messages.push(new EventMessage(user, Event.userConnected));
    });

    this.userEventService.userDisconnectedEvent.subscribe(user => {
      this.messages.push(new EventMessage(user, Event.userLeft));
    });
  }

}
