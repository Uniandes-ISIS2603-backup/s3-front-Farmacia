import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { TransaccionProveedorService } from '../transaccion-proveedor.service';

import { TransaccionProveedor } from '../transaccion-proveedor';

@Component({
    selector: 'app-transaccion-proveedor-create',
    templateUrl: './transaccion-proveedor-create.component.html',
    styleUrls: ['./transaccion-proveedor-create.component.css']
})
export class TransaccionProveedorCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param transaccionProveedorService 
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private transaccionProveedorService: TransaccionProveedorService,
        private toastrService: ToastrService
    ) { }

    /**
    * La nueva transaccion proveedor
    */
    transaccionProveedor: TransaccionProveedor;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an transaction
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new transaction
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new transaction
    */
    createTransaccionProveedor(): void {
        this.transaccionProveedorService.createTransaccionProveedor(this.transaccionProveedor)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The transaction was created", "TransaccionProveedor creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
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
        this.transaccionProveedor = new TransaccionProveedor();
    }
}