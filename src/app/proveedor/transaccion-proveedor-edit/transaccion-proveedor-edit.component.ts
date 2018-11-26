import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ProveedorService } from '../proveedor.service';

import { TransaccionProveedor } from '../transaccion-proveedor';

import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-transaccion-proveedor-edit',
  templateUrl: './transaccion-proveedor-edit.component.html',
  styleUrls: ['./transaccion-proveedor-edit.component.css']
})
export class TransaccionProveedorEditComponent implements OnInit {

   /**
    * Constructor for the component
    * @param ProveedorService
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private proveedorService: ProveedorService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
) { }

/**
* La nueva transaccion proveedor
*/
@Input() idTransaccionProveedor: number;

/**
* id del proveedor
*/
@Input()idProveedor: number;

idProducto: number;

/**
* The output which tells the parent component
* that the user no longer wants to create an transaction
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new transaction
*/
@Output() edit = new EventEmitter();

/**
* Agrega un producto a la transaccion
*/
addProducto(): void {
  this.proveedorService.asociateTransaccionProducto(this.idProveedor,this.idTransaccionProveedor,this.idProducto) 
}

/**
* Informs the parent component that the user no longer wants to create a transaction
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    
}

/**
* The function which notices that the input which defines the book_id has changed.
* If the book has changed, we update the reviews to show
*/
ngOnChanges() {
this.ngOnInit();
}

}
