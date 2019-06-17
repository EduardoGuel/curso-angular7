
import {Injectable } from '@angular/core';

@Injectable()
export class RopaService{
	nombre_prenda:String = 'Jeans Mezclilla';
	coleccionRopa = ['Camisa Roja', 'Camisa Azul'];

	prueba(nombre_prenda:string){
		return nombre_prenda;
	}

	addRopa(nombre_prenda:string){
		this.coleccionRopa.push(nombre_prenda);

		return this.getRopa();
	}

	getRopa(){
		return this.coleccionRopa;
	}
}