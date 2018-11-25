import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  /**
   * Cliente que se creara
   */
  cliente: Cliente;

  /**
   * Contructor del componente CreateCliente
   * @param clienteService The cliente's services provides
   * @param toastrService the toastr to show messages to the user
   */
  constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService
  ) { }

  /**
* The output which tells the parent component
* that the user no longer wants to create a provider
*/
  @Output() cancel = new EventEmitter();
  /**
  * The output which tells the parent component
  * that the user created a provider
  */
  @Output() create = new EventEmitter();

  /**
   * Crea un cliente
   */
  createCliente(): Cliente {
    this.clienteService.createCliente(this.cliente)
      .subscribe((cliente) => {
        this.cliente = cliente;
        this.create.emit();
        this.toastrService.success("El cliente fue creado", "Creación cliente");
      });
    return this.cliente;
  }
  /**
* Emits the signal to tell the parent component that the
* user no longer wants to create 
*/
  cancelCreation(): void {
    this.cancel.emit();
  }
  /**
* Inicializamos el componente.
*/
  ngOnInit() {
    this.cliente = new Cliente();
  }

}