import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ProveedorService } from '../proveedor.service';

import { TransaccionProveedor } from '../transaccion-proveedor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Proveedor } from 'src/app/proveedor/proveedor';

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
        private toastrService: ToastrService,
        private proveedorService: ProveedorService,
        public dialogRef: MatDialogRef<TransaccionProveedorCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public proveedor: Proveedor
    ) { this.transaccionProveedor = new TransaccionProveedor();
        this.transaccionProveedor.proveedor = proveedor;
     }
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


    send() {
        if (!this.transaccionProveedor.tiempo || !this.transaccionProveedor.monto) {
            this.toastrService.error('Todos los campos son requeridos', 'Error');
            return;
        }
        console.log(this.proveedor.id);
        this.createTransaccionProveedor();
    }

    /**
    * Creates a new transaction
    */
    createTransaccionProveedor(): void {
        this.proveedorService.createTransaccionProveedor(this.transaccionProveedor, this.proveedor.id)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success('The transaction was created', 'TransaccionProveedor creation');
                this.dialogRef.close();
            }, err => {
                this.toastrService.error(err, 'Error');
                this.dialogRef.close();
            });
    }

    /**
    * Informs the parent component that the user no longer wants to create a transaction
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.transaccionProveedor = new TransaccionProveedor();
    }
}

export interface ProveedorAndService {
    proveedor: Proveedor;
    service: ProveedorService;
}
