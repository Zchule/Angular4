import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Injectable()
export class AutotizacionService {

  constructor(
    private authFire: AngularFireAuth,
    private router: Router
  ) {
    this.isLogged();
  }

  public faccebookLogin() {
    this.authFire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((result) => {
      console.log(result);
      alert('user logged facebook');
      this.router.navigate(['lugares']);
    }).catch((error) => {
      console.log(error);
    });
  }
  public login = (email: string, password: string) => {
    console.log('login');
    this.authFire.auth.signInWithEmailAndPassword(email, password)
    .then((response) => {
      alert('usuario logeado');
      this.router.navigate(['lugares']);
    }).catch((error) => {
      alert('error');
      console.log(error);
    });
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
  public isLogged() {
    return this.authFire.authState;
  }
}
