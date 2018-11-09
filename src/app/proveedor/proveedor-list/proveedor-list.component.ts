import { Component, OnInit, Input } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
/**
* El componente listar del proveedor.
*/
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  showCreate: boolean;

  /**
  * Constructor for the providerlist 
  * @param proveedorService The provider's services supplier
  */
  constructor(private proveedorService: ProveedorService) { }

  /**
  * The list of providers
  */
  proveedores: Proveedor[];
  /**
  * The id of the provider to create
  */
  proveedor_id: number;

  /**
  * Asks the service to update the list of providers
  */
  getProveedores(): void {
    this.proveedorService.getProveedores().
      subscribe(proveedores => this.proveedores = proveedores);
  }
  /**
  * Initialize all the tools of the list
  */
  ngOnInit() {

    this.showCreate = false;
    this.getProveedores();
  }
  /**
  * Method to manage the events from the button of creation
  */
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }
}
