import { Component, OnInit, Input } from '@angular/core';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

 @Input() clientes: Cliente[];

 showCreate: boolean;

 showEdit: boolean;

 cliente_edit_id: number;

  getClientes(): void {
    this.clienteService.getClientes()
    .subscribe(clientes => this.clientes = clientes);

  }

  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.getClientes();
  }

  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
  }

  showHideEdit(cliente_id: number): void{
    if ( this.showEdit || (this.showEdit && cliente_id != this.cliente_edit_id)){
      this.showCreate = false;
      this.showEdit = true;
      this.cliente_edit_id = cliente_id;
    }
    else{
      this.showEdit = false;
    }
  }

  updateCliente(): void{
    this.showEdit = false;
  }

}
