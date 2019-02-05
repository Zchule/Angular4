import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar: any = {};
  id: any = null;

  constructor(
    private afData: LugaresService,
    private route: ActivatedRoute,
    ) {
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      if (this.id !== 'new') {
        this.afData.getLugar(this.id).valueChanges()
        .subscribe((lugar) => {
          this.lugar = lugar;
        });
      }
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
