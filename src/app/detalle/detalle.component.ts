import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {

  lugares:any = [
    {id: '1', plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', description:'descrition1'},
    {id: '2', plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', description:'descrition2'},
    {id: '3', plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', description:'descrition3'},
    {id: '4', plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll', description:'descrition4'},
    {id: '5', plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', description:'descrition5'},
    {id: '6', plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo', description:'descrition6'}
  ];

  id: number = null;
  lugar: any = {};
  constructor(
    private route: ActivatedRoute,
    private lugaresService: LugaresService
    ) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }

}