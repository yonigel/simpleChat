import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';
import { FormBuilder } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleChat';

  private socket;
  private messages: Message[];
  private chatMessageFormGroup;

  constructor(private socketService: SocketService, private formBuilder: FormBuilder) {
    console.log(`starting app`);
    this.initConnection();
    this.chatMessageFormGroup = this.formBuilder.group({
      chatMessageControl: ['']
    });
  }

  private initConnection() {
    this.socketService.initSocket();

    this.socketService.onMessage().subscribe(message => {
      console.log(`got message ${message}`);
    });
  }

  private onSubmitChatMessage() {
    this.sendMessage(this.chatMessageFormGroup.controls.chatMessageControl.value);
  }

  public sendMessage(message: string): void {
    console.log(`sending message ${message}`);
    this.socketService.sendMessage({
      from: 'user',
      content: message
    });
  }
}
