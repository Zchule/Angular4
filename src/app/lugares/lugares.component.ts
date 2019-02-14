import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500)),
    ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'final';

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

  animar() {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicial(e) {
    console.log('inicial');
    console.log(e);
  }

  animacionFinal(e) {
    console.log('final');
    console.log(e);
  }
}

