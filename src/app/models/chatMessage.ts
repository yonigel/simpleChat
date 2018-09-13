import { Message } from './message';

export class ChatMessage implements Message {
    user: string;
    content: string;
    constructor(user: string, content: string) {
        this.user = user;
        this.content = content;
    }
}
