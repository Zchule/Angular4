import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()

export class LugaresService {

  API_ENDPOINT = 'https://platzisquare-7e8ce.firebaseio.com';

  constructor(
    private afDB: AngularFireDatabase,
    private http: HttpClient,
    ) {
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id).valueChanges();
  }

  public getLugares() {
    // return this.afDB.list('/lugares').valueChanges();
    // tslint:disable-next-line:max-line-length
    // return this.http.get(this.API_ENDPOINT + '/lugares.json');
    return this.http.get(this.API_ENDPOINT + '/.json')
    .pipe(map((resultado: any) => {
    const data =  resultado.lugares;
      return data;
      })
    );
  }

  buscarLugar(id) {
    // return this.lugares.filter((lugar: any) => {
    //   return lugar.id === id;
    // })[0] || null;
  }

  saveLugar(lugar) {
  // this.afDB.list('lugares/'+ lugar.id).push(lugar); con id firebase
   // this.afDB.object('lugares/' + lugar.id).set(lugar);
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, { headers: headers }).subscribe();
  }

  editLugar(lugar) {
     this.afDB.object('lugares/' + lugar.id).set(lugar);
    }

  public obtenerGeoData(direccion) {
    // http://maps.google.com/maps/api/geocode/json?address=
    // http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    // return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB9qJ58RNJfsaPz9LkOqN5Cx4gJIThbpHQ&address=' + direccion);
  }
}
