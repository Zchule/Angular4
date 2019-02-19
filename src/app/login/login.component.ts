import { Component } from '@angular/core';
import { AutotizacionService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authorizationService: AutotizacionService,
  ) {
    this.authorizationService.login('email', 'password');
  }
}
