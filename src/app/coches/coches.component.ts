import { Component, OnInit } from '@angular/core';
import { Coche } from "./coche"

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coche:Coche;
  public coches:Array<Coche>;

  constructor(
  ){
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat Panda", "120", "Blanco"),
      new Coche("Renaut Clio", "140", "Azul"),
    ];
  }

  onSubmit(){
    this.coches.push(this.coche)
    this.coche = new Coche("","","");
  }

  ngOnInit() {
  }

}
