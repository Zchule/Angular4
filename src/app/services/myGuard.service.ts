import { Injectable } from '@angular/core';
import { AutotizacionService } from './authorization.service';
import { CanActivate } from '@angular/router';

@Injectable()

export class MyGuardService implements CanActivate {
    loggedIn = false;
    constructor(
        private authService: AutotizacionService,
      ) {
        this.authService.isLogged()
        .subscribe((result) => {
          if (result && result.uid) {
            this.loggedIn = true;
          } else {
            this.loggedIn = false;
          }
        }, (error) => {
          this.loggedIn = false;
        });
      }
      canActivate() {
        return this.loggedIn;
    }
}
