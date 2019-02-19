import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AutotizacionService {

  constructor(
    private authFire: AngularFireAuth,
  ) {

  }
  public login = (email: string, password: string) => {
    console.log('login');
  }
  public registro = (email: string, password: string) => {
    console.log('registro');
    this.authFire.auth.createUserWithEmailAndPassword(email, password)
    .then((response) => {
      alert('usuario registrado');
    }).catch((error) => {
      alert('error');
      console.log(error);
    });
  }
}
