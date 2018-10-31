import { Component, OnInit } from '@angular/core';
import { TransaccionClienteService } from '../transaccion-cliente.service';
import { TransaccionCliente } from '../transaccion-cliente';

@Component({
  selector: 'app-transaccion-cliente-list',
  templateUrl: './transaccion-cliente-list.component.html',
  styleUrls: ['./transaccion-cliente-list.component.css']
})
export class TransaccionClienteListComponent implements OnInit {

  constructor(private transaccionClienteService : TransaccionClienteService) { }

  transaccionesCliente : TransaccionCliente[];

  getTransaccionesCliente():void {
    this.transaccionClienteService.getTransaccionesCliente().subscribe(transaccionesCliente => this.transaccionesCliente = transaccionesCliente);
  }
  ngOnInit() {
    this.getTransaccionesCliente();
  }

}
