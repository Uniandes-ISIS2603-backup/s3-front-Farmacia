import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ToastrService } from 'ngx-toastr';
import { ClienteDetail } from '../cliente-detail';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
/**
 * El componente listar del cliente
 */
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  showCreate: boolean;

  showEdit: boolean;

  selectedCliente: Cliente;

  habilitarEdit : boolean;

  /**
   * Constructor for the clienteList
   * @param clienteService 
   * @param modalDialogService 
   * @param viewRef 
   * @param toastrService 
   */
  constructor(
    private clienteService: ClienteService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) { }

  /**
   * The list of Clientes
   */
  clientes: Cliente[];

  /**
   * The id of the cliente to create
   */
  cliente_id: number;

  onSelected(id: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.cliente_id = id;
    this.selectedCliente = new ClienteDetail();
    this.getClienteDetail();
  }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
  }

  /**
   * Shows or hides the edit component
   * @param cliente_id 
   */
  showHideEdit(cliente_id: number): void {
    if (!this.showEdit || (this.showEdit && cliente_id != this.selectedCliente.id)) {
      this.showCreate = false;
      this.showEdit = true;
      this.cliente_id = cliente_id;
      this.selectedCliente = new ClienteDetail();
      this.getClienteDetail();
    }
    else {
      this.showEdit = false;
    }
  }

  /**
   * Asks the service to update the list of clientes
   */
  getClientes(): void {
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes);

  }

  /**
   * Get the clienteDetail
   */

  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.cliente_id)
        .subscribe(selectedCliente => {
            this.selectedCliente = selectedCliente
        });
}

/**
 * Update the cliente
 */
updateCliente(): void {
  this.showEdit = false;
}

/**
 * Elimina el cliente especificado por el id que entra por parametro
 * @param clienteId Id del cliente que se va a eliminar
 */
deleteCliente(clienteId): void {
  this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar un cliente.',
      childComponent: SimpleModalComponent,
      data: {text: '¿Está seguro de eliminar a este cliente? Recuede que esta acción es irreversible'},
      actionButtons: [
          {
              text: 'Yes',
              buttonClass: 'btn btn-success',
              onAction: () => {
                  this.clienteService.deleteCliente(clienteId).subscribe(() => {
                      this.toastrService.success("El cliente fue eliminado satisfactoriamente.", "Cliente eliminado");
                      this.ngOnInit();
                  }, err => {
                      this.toastrService.error(err, "Error");
                  });
                  return true;
              }
          },
          {text: 'No', onAction: () => true}
      ]
  });
  this.ngOnInit();
}


/**
* This will initialize the component by retrieving the list of clientes from the service
* This method will be called when the component is created
*/
  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.selectedCliente = undefined;
    this.cliente_id = undefined;
    this.habilitarEdit = false;
    this.getClientes();
  }

  saveNombre(event) {
    this.selectedCliente.nombre = event.target.outerText;
    this.habilitarEdit = true;
}
saveApellido(event) {
  this.selectedCliente.apellido = event.target.outerText;
  this.habilitarEdit = true;
}
saveCiudad(event){
  this.selectedCliente.ciudad = event.target.outerText;
  this.habilitarEdit = true;
}
saveDireccion(event){
  this.selectedCliente.direccionEnvio = event.target.outerText;
  this.habilitarEdit = true;
}
saveCedula(event){
  this.selectedCliente.cedula = event.target.outerText;
  this.habilitarEdit = true;
}


edit(clienteId) {
  if (this.habilitarEdit) {
      this.selectedCliente.id = clienteId;
      this.clienteService.updateCliente(this.selectedCliente).subscribe(() => {
          this.toastrService.success('Se guardaron los cambios del cliente exitosamente.');
          this.ngOnInit();
      }, error => {
          this.toastrService.error(error, "Error, verifique los datos.")
      });
  }
  else {
      this.toastrService.info("Ups, no hay modificado ningún campo.")
  }
}

}
