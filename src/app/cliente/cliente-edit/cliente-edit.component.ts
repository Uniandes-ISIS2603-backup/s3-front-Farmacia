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

    /**
     * El contructor del componente para editar un cliente
     * @param clienteService The cliente's services provider
     * @param toastrService  the toastr to show messages to the user
     * @param router 
     */
    constructor(
        private clienteService: ClienteService,
        private toastrService: ToastrService,
        private router: Router
    ){}

    /**
     * El cliente e editar
     */
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

   /**
    * Guarda los cambios que se le han hecho al cliente indicado
    */
   guardarCambios() {
    this.clienteService.updateCliente(this.cliente)
    .subscribe(() => {
      this.toastrService.success('Se guardaron los cambios del cliente');
    }, error => {
      this.toastrService.error(error, "Error")
      this.update.emit();
    });
  }

  /**
   * Cancela la edicion de un cliente
   */
  cancelEdition(): void {
    this.toastrService.warning('The cliente wasn\'t edited', 'Cliente edition');
    this.router.navigate(['/clientes/list']);
    this.cancel.emit();
}

  /**
  * Inicializamos el componente.
  */
  ngOnInit() 
  {
    this.cliente = new ClienteDetail();
  }
 
}