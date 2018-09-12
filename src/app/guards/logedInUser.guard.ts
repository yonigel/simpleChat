import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class LoggedInUserGuard implements CanActivate {

    private readonly CONNECT_PATH = '/connect';

    constructor(private userService: UserService, private router: Router) {}

    canActivate(): boolean {
        console.log(`LoggedInUserGuard`);
        if (this.userService.isUserConnected()) {
            console.log(`user is connected, can use chat`);
            return true;
        } else {
            console.log(`user is not logged in, cannot use chat`);
            this.router.navigate([this.CONNECT_PATH]);
            return false;
        }
    }
}
