import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, debounceTime } from 'rxjs/operators';
// import 'rxjs/Rx'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar: any = {};
  id: any = null;
  results$: Observable<any>;
  searchField: FormControl;
  constructor(
    private afData: LugaresService,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      if (this.id !== 'new') {
        this.afData.getLugar(this.id)
        .subscribe((lugar) => {
          this.lugar = lugar;
        });
      }
      const URL = 'https://maps.google.com/maps/api/geocode/json';
      this.searchField = new FormControl();
      this.results$ = this.searchField.valueChanges.pipe(
        debounceTime(300),
        switchMap(query => this.http.get(`${URL}?address=${query}`)),
        map((response: any) => response.results),
      );
      this.results$.subscribe(rta => {
        console.log(rta);
      });
    }

  guardarLugar() {
    const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.afData.obtenerGeoData(direccion)
    .subscribe((result: any) => {
      if ( this.id !== 'new') {
        this.afData.editLugar(this.lugar);
        alert('negocio editado');
      } else {
      this.lugar.id = Date.now();
      this.lugar.lat = result.results[0].geometry.location.lat;
      this.lugar.lng = result.results[0].geometry.location.lng;
      this.afData.saveLugar(this.lugar);
      alert('negocio guardado');
      }
      this.lugar = {};
    });
  }
}
