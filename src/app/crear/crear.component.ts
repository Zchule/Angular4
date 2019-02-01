import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  lugar:any = {};

  constructor( private afData: LugaresService){

  }

  guardarLugar() {
    this.lugar.id = Date.now(); 
    this.afData.saveLugar(this.lugar);
    alert('negocio guardado');
    this.lugar = {};
  }
}