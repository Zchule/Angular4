import { Injectable } from '@angular/core';

@Injectable()
export class AutotizacionService {
  public login = (email: string, password: string) => {
    console.log('login');
  }
  public registro = (email: string, password: string, password2: string) => {
    console.log('registro');
  }
}
