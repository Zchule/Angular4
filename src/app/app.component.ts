import { Component } from '@angular/core';
import { AutotizacionService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  email: any = null;
  constructor(
    private authService: AutotizacionService,
  ) {
    this.authService.isLogged()
    .subscribe((result) => {
      if (result && result.uid) {
        this.loggedIn = true;
        setTimeout(() => {
          this.email = authService.getUser().currentUser.email;
        }, 500);
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
