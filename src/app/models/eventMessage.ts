import { Message } from './message';
import { MessageType } from '../enums/messageType.enum';
import { Event } from '../enums/events.enum';

export class EventMessage implements Message {

    eventType: Event;
    user: string;

    constructor(user: string, event: Event) {
        this.user = user;
        this.eventType = event;
    }

    getMessageType(): MessageType {
        return MessageType.chatEvent;
    }
}
