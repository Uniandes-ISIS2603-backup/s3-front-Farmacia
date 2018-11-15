import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ProveedorService } from '../proveedor.service';

import { TransaccionProveedor } from '../transaccion-proveedor';

import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../proveedor';

@Component({
    selector: 'app-transaccion-proveedor-create',
    templateUrl: './transaccion-proveedor-create.component.html',
    styleUrls: ['./transaccion-proveedor-create.component.css']
})
export class TransaccionProveedorCreateComponent implements OnInit {

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
    transaccionProveedor: TransaccionProveedor;

    /**
    * id del proveedor
    */
    @Input() proveedor: Proveedor;

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
        this.transaccionProveedor.proveedor = this.proveedor;
        this.proveedorService.createTransaccionProveedor(this.transaccionProveedor, this.transaccionProveedor.proveedor)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success('La transaccion fue creada', 'Creacion TransaccionProveedor');
            }, err => {
                this.toastrService.error(err, 'Error');
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

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
   ngOnChanges() {
    this.ngOnInit();
}
}
