import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @Input()
  chatMessages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
