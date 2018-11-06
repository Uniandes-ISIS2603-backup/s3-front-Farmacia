import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../cliente';

@Component({
    selector: 'app-cliente-create',
    templateUrl: './cliente-create.component.html',
    styleUrls: ['./cliente-create.component.css']
  })
  export class ClienteCreateComponent implements OnInit {


   cliente : Cliente;
  
  
  
    constructor(
      private clienteService : ClienteService,
      private toastrService : ToastrService
    ) { }
  
    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
  
    createCliente(): Cliente {
      this.clienteService.createCliente(this.cliente)
      .subscribe((cliente) => {
        this.cliente = cliente;
        this.create.emit();
        this.toastrService.success("El cliente fue creado", "Creación cliente");
      });
      return this.cliente;
    }
  
    cancelCreation(): void {
      this.cancel.emit();
  }
  
    ngOnInit() {
      this.cliente = new Cliente();
    }
  
  }