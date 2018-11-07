import { Component, OnInit, Input } from '@angular/core';
import { TransaccionClienteService } from '../transaccion-cliente.service';
import { TransaccionCliente } from '../transaccion-cliente';

@Component({
  selector: 'app-transaccion-cliente-list',
  templateUrl: './transaccion-cliente-list.component.html',
  styleUrls: ['./transaccion-cliente-list.component.css']
})
export class TransaccionClienteListComponent implements OnInit {

  constructor(private transaccionClienteService : TransaccionClienteService) { }

  @Input() transaccionesCliente : TransaccionCliente[];

  showCreate: boolean;

  getTransaccionesCliente():void {
    this.transaccionClienteService.getTransaccionesCliente().subscribe(transaccionesCliente => this.transaccionesCliente = transaccionesCliente);
  }
  ngOnInit() {
    this.showCreate = false;
    this.getTransaccionesCliente();
  }

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

}
