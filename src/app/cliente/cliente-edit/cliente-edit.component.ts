import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';

@Component({
    selector: 'app-cliente-edit',
    templateUrl: './cliente-edit.component.html',
    styleUrls: ['./cliente-edit.component.css'],
})
export class ClienteEditComponent implements OnInit{

    constructor(
        private clienteService: ClienteService,
        private toastrService: ToastrService
    ){}

    /**
    * The id of the cliebte that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() cliente_id: number;

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

   cliente: ClienteDetail;

    /**
    * Retrieves the information of the cliente
    */
   getCliente(): void {
    this.clienteService.getClienteDetail(this.cliente_id)
        .subscribe(cliente => {
            this.cliente = cliente;
        });
    } 

    /**
    * Updates the cliente's information
    */
   editCliente(): void {
    this.clienteService.updateCliente(this.cliente)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The cliente's information was updated", "Cliente edition");
        });
    }

    
    /**
    * Informs the parent component that the user no longer wants to update the cliente
    */
   cancelEdition(): void {
    this.cancel.emit();
   }

    /**
    * The function which initializes the component
    */
   ngOnInit() {
    this.cliente = new ClienteDetail();
    this.getCliente();
   }

  /**
  * The function which is called every time the user chooses to edit a different editorial
  */
  ngOnChanges() {
    this.ngOnInit();
  }
 
}