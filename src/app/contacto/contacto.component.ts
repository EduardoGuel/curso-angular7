import { Component} from '@angular/core';

import { RopaService } from '../services/ropa.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [RopaService]
})
export class ContactoComponent {

  listadoRopa:Array<String> = [];
  prendaGuardar:string; 

  constructor(
    private _ropaService: RopaService
  ){}

  ngOnInit() {
    this.listadoRopa = this._ropaService.obtenerRopa();
    console.log(this.listadoRopa)
  }

  agregarRopa(){
    this._ropaService.addRopa(this.prendaGuardar);
    this.prendaGuardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }

}
