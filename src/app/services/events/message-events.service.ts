import { Injectable } from '@angular/core';
import { Message } from '../../models/message';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageEventsService {

  constructor() { }

  private chatMessageSentSource: Subject<Message> = new Subject<Message>();

  chatMessageSentEvent = this.chatMessageSentSource.asObservable();

  setChatMessageSentEvent(message: Message): void {
    this.chatMessageSentSource.next(message);
  }
}
