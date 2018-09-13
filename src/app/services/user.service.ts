import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly LOCAL_STORAGE_USERNAME = 'username';
  private readonly CHAT_PATH = '/chatRoom';
  private connectedUsername: string;

  constructor(private router: Router) {
    if (this.isUserConnected()) {
      this.setConnectedUsername(localStorage.getItem(this.LOCAL_STORAGE_USERNAME));
    }
   }

  private setConnectedUsername(username: string): void {
    this.connectedUsername = username;
  }

  public isUserConnected(): boolean {
    return localStorage.getItem(this.LOCAL_STORAGE_USERNAME) ? true : false;
  }

  public connect(username: string): void {
    localStorage.setItem(this.LOCAL_STORAGE_USERNAME, username);
    this.setConnectedUsername(username);
    this.router.navigate([this.CHAT_PATH]);
  }

  public getConnectedUsername(): string {
    return this.connectedUsername;
  }

}
