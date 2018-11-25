import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
    selector: 'app-cliente-edit',
    templateUrl: './cliente-edit.component.html',
    styleUrls: ['./cliente-edit.component.css'],
})
export class ClienteEditComponent implements OnInit{

    constructor(
        private clienteService: ClienteService,
        private toastrService: ToastrService,
        private router: Router
    ){}

    @Input() cliente : Cliente;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create a cliente
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new cliente
   */
   @Output() update = new EventEmitter();

   guardarCambios() {
    this.clienteService.updateCliente(this.cliente)
    .subscribe(() => {
      this.toastrService.success('Se guardaron los cambios del cliente');
    }, error => {
      this.toastrService.error(error, "Error")
      this.update.emit();
    });
  }

  cancelEdition(): void {
    this.toastrService.warning('The cliente wasn\'t edited', 'Cliente edition');
    this.router.navigate(['/clientes/list']);
    this.cancel.emit();
}


  ngOnInit() 
  {
    this.cliente = new ClienteDetail();
  }
 
}