import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import { ChatMessage } from '../../../models/chatMessage';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-chat-message',
  templateUrl: './send-chat-message.component.html',
  styleUrls: ['./send-chat-message.component.css']
})
export class SendChatMessageComponent implements OnInit {

  @Input()
  connectedUsername: string;

  private sendMessageFormGroup;

  constructor(private socketService: SocketService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sendMessageFormGroup = this.formBuilder.group({
      chatMessage: ['', Validators.required]
    });
  }

  private onSendMessageSubmit(): void {
    const content = this.sendMessageFormGroup.controls.chatMessage.value;
    const message = new ChatMessage(this.connectedUsername, content);
    this.sendMessage(message);
  }

  private sendMessage(message: ChatMessage): void {
    this.socketService.sendMessage(message);
  }
}
