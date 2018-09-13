import { Message } from './message';
import { MessageType } from '../enums/messageType.enum';

export class ChatMessage implements Message {

    private messageType = MessageType.chatMessage;
    user: string;
    content: string;
    constructor(user: string, content: string) {
        this.user = user;
        this.content = content;
    }

    public getMessageType(): MessageType {
        return this.messageType;
    }

}
