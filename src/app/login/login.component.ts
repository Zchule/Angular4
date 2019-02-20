import { Component } from '@angular/core';
import { AutotizacionService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: any = {};
  constructor(
    private authorizationService: AutotizacionService,
  ) {
  }

  login() {
    this.authorizationService.login(this.user.email, this.user.password);
  }

  facebookLogin() {
    this.authorizationService.faccebookLogin();
  }
}
