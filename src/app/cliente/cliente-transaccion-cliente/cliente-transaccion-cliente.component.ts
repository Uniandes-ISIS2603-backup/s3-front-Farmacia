import { Component, OnInit, Input, } from '@angular/core';
import {TransaccionCliente} from '../transaccion-cliente';
import {ClienteService} from '../cliente.service';
import { TransaccionClienteDetail } from 'src/app/transaccion-cliente/transaccion-cliente-detail';

@Component({
  selector: 'app-cliente-transaccion-cliente',
  templateUrl: './cliente-transaccion-cliente.component.html'
})
export class ClienteTransaccionClienteComponent implements OnInit {
  
  @Input() transacciones : TransaccionClienteDetail; 
  @Input() clienteId:number;
  @Input() transaccionClienteId:number;

  showCreate :Boolean;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() 
  {
    this.showCreate = false;
  }
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

}
