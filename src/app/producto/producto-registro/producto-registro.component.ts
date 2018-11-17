import { Component, OnInit, Input, } from '@angular/core';
import {Registro} from '../registro';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html'
})
export class ProductoRegistroComponent implements OnInit {
  @Input() registros : Registro[]; 

  showCreate :Boolean;

  constructor() { }

  ngOnInit() 
  {
    this.showCreate = false;
  }
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

}