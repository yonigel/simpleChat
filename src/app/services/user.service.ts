import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly LOCAL_STORAGE_USERNAME = 'username';

  constructor() { }

  public isUserConnected(): boolean {
    return localStorage.getItem(this.LOCAL_STORAGE_USERNAME) ? true : false;
  }

  public connect(username: string): void {
    localStorage.setItem(this.LOCAL_STORAGE_USERNAME, username);
  }
}
