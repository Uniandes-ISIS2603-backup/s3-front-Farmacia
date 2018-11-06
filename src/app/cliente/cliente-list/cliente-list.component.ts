import { Component, OnInit, Input } from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  showCreate: boolean;

  constructor(private clienteService: ClienteService) { }

 @Input() clientes: Cliente[];

 cliente_id: number;

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);

  }

  ngOnInit() {
    this.showCreate = false;
    this.getClientes();
  }

  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }

}
