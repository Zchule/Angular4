import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lugares = null;
  lat = 4.6560663;
  lng = -74.0595918;
  constructor(
    private lugaresService: LugaresService
    ) {
      lugaresService.getLugares().subscribe((lugares) => {
        // this.lugares = lugares;
        this.lugares = Object.values(lugares);
      }, error => {
        console.log(error);
        alert('tenemos algunos errores');
      });
  }
}

