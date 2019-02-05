import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar: any = {};

  constructor( private afData: LugaresService) {
  }

  guardarLugar() {
    const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.afData.obtenerGeoData(direccion)
    .subscribe((result: any) => {
      this.lugar.lat = result.results[0].geometry.location.lat;
      this.lugar.lng = result.results[0].geometry.location.lng;

      this.lugar.id = Date.now();
      this.afData.saveLugar(this.lugar);
      alert('negocio guardado');
      this.lugar = {};
    });
  }
}
