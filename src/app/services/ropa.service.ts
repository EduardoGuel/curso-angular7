import { Injectable } from '@angular/core';
 
@Injectable()
export class RopaService{
	public nombre_prenda:String = 'Jeans Mezclilla';
	public coleccionRopa:Array<string> = ['Camisa Roja', 'Camisa Azul'];

	prueba(nombre_prenda:string){
		return nombre_prenda;
	}

	addRopa(nombre_prenda:string){
		this.coleccionRopa.push(nombre_prenda);

		return this.obtenerRopa();
	}

	deleteRopa(index:number){
		this.coleccionRopa.splice(index, 1);
		return this.obtenerRopa();
	}

	obtenerRopa(){
		return this.coleccionRopa;
	}
}