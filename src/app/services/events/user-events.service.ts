import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEventsService {

  constructor() { }

  private userConnectedSource: Subject<string> = new Subject<string>();
  private userDisconnectedSource: Subject<string> = new Subject<string>();

  userConnectedEvent = this.userConnectedSource.asObservable();
  userDisconnectedEvent = this.userDisconnectedSource.asObservable();

  public setConnectedUserEvent(connectedUser: string): void {
    this.userConnectedSource.next(connectedUser);
  }

  public setDisconnectedUserEvent(disconnectedUser: string): void {
    this.userDisconnectedSource.next(disconnectedUser);
  }
}
