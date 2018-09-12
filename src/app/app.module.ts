import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EnterUsernameComponent } from './components/chat/enter-username/enter-username.component';
import { UsersListComponent } from './components/chat/users-list/users-list.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { SendChatMessageComponent } from './components/chat/send-chat-message/send-chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterUsernameComponent,
    UsersListComponent,
    ChatWindowComponent,
    SendChatMessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
