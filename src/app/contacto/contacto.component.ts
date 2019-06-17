import { Component, OnInit } from '@angular/core';

import { RopaService } from '../services/ropa.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [RopaService]
})
export class ContactoComponent implements OnInit {

  listadoRopa = [];

  constructor() { 
    _ropaService: RopaService;
  }

  ngOnInit() {
    this.listadoRopa = this.RopaService.getRopa();
  }

}
