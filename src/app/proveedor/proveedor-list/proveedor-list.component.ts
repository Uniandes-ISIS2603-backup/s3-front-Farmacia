import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { ProveedorDetail } from '../proveedor-detail';
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

  showEdit : boolean;

  selectedProveedor : Proveedor;

  /**
  * Constructor for the providerlist 
  * @param proveedorService The provider's services supplier
  */
  constructor(private proveedorService: ProveedorService,
    ) { }

  /**
  * The list of providers
  */
  proveedores: Proveedor[];
  /**
  * The id of the provider to create
  */
  proveedor_id: number;


  onSelected(id: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.proveedor_id = id;
    this.selectedProveedor = new ProveedorDetail();
    this.getProveedorDetail();
}

/**
* Shows or hides the create component
*/
showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate;
}

/**
* Shows or hides the create component
*/
showHideEdit(proveedor_id: number): void {
    if (!this.showEdit || (this.showEdit && proveedor_id != this.selectedProveedor.id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.proveedor_id = proveedor_id;
        this.selectedProveedor = new ProveedorDetail();
        this.getProveedorDetail();
    }
    else {
        this.showEdit = false;
    }
}

/**
* Asks the service to update the list of authors
*/
getProveedores(): void {
    this.proveedorService.getProveedores()
        .subscribe(proveedores => {
            this.proveedores = proveedores;
        });
}

getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
        .subscribe(selectedProveedor => {
            this.selectedProveedor = selectedProveedor
        });
}

updateProveedor(): void {
    this.showEdit = false;
}
/**
* This will initialize the component by retrieving the list of authors from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.selectedProveedor = undefined;
    this.proveedor_id = undefined;
    this.getProveedores();
}

}
