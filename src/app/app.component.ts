import { Component } from '@angular/core';
import { AutotizacionService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  email = null;
  constructor(
    private authService: AutotizacionService,
  ) {
    this.authService.isLogged()
    .subscribe((result) => {
      if (result && result.uid) {
        this.loggedIn = true;
        this.email = authService.getEmail();
      } else {
        this.loggedIn = false;
      }
    }, (error) => {
      this.loggedIn = false;
    });
  }

  logout() {
    this.authService.logout();
  }
}
