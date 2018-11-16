import { Component, OnInit, Input, } from '@angular/core';
import {TransaccionCliente} from '../transaccion-cliente';

@Component({
  selector: 'app-cliente-transaccion-cliente',
  templateUrl: './cliente-transaccion-cliente.component.html'
})
export class ClienteTransaccionClienteComponent implements OnInit {
  @Input() transacciones : TransaccionCliente[]; 

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
