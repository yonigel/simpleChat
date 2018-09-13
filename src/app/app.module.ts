import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EnterUsernameComponent } from './components/chat/enter-username/enter-username.component';
import { UsersListComponent } from './components/chat/users-list/users-list.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { SendChatMessageComponent } from './components/chat/send-chat-message/send-chat-message.component';
import { MainChatComponent } from './components/chat/main-chat/main-chat.component';
import {LoggedInUserGuard} from './guards/logedInUser.guard';

const appRouter: Routes = [
  {path: 'connect', component: EnterUsernameComponent},
  {path: '', redirectTo: '/connect', pathMatch: 'full'},
  {path: 'chatRoom', component: MainChatComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EnterUsernameComponent,
    UsersListComponent,
    ChatWindowComponent,
    SendChatMessageComponent,
    MainChatComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRouter
    ),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [LoggedInUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
