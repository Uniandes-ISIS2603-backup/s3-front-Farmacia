import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {




  /**
  * Constructor for the createproveedor component
  * @param proveedorService The provider's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) { }

  /**
  * The new provider
  */
  proveedor: Proveedor;

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
  * Creates a provider
  */
  createProveedor(): Proveedor {
    this.proveedorService.createProveedor(this.proveedor)
      .subscribe((proveedor) => {
        this.proveedor = proveedor;
        this.create.emit();
        this.toastrService.success("El proveedor fue creado", "Creación proveedor");
      });
    return this.proveedor;
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
    this.proveedor = new Proveedor();
  }

}
