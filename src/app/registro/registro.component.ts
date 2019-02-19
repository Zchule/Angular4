import { Component } from '@angular/core';
import { AutotizacionService } from '../services/authorization.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {

  constructor(
    private authorizationService: AutotizacionService,
  ) {
    this.authorizationService.registro('email', 'password', 'password2');
  }

}
