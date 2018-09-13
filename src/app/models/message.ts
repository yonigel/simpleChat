import { MessageType } from '../enums/messageType.enum';

export interface Message {
    getMessageType(): MessageType;
}

