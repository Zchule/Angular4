import { Component } from '@angular/core';
import { AutotizacionService } from '../services/authorization.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {
  registro: any = {};
  constructor(
    private authorizationService: AutotizacionService,
  ) {
  }

  registrar() {
    this.authorizationService.registro(this.registro.email, this.registro.password);
  }

}
