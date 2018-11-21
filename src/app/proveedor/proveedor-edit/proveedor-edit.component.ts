import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ProductoService } from 'src/app/producto/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/producto/producto';
import {TransaccionProveedor} from '../transaccion-proveedor';
import { Proveedor } from '../proveedor';
import { ProveedorDetail } from '../proveedor-detail';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  constructor(
    private proveedorService : ProveedorService,
    private productoService : ProductoService,
    private toastrService : ToastrService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  @Input() proveedor : Proveedor;

   /**
    * The output which tells the parent component
    * that the user no longer wants to edit a provider
    */
   @Output() cancel = new EventEmitter();

   /**
    * The output which tells the parent component
    * that the user updated the provider's information
    */
   @Output() update = new EventEmitter();

  guardarCambios() {
    this.proveedorService.updateProveedor(this.proveedor)
    .subscribe(() => {
      this.toastrService.success('Se guardaron los cambios del proveedor');
    }, error => {
      this.toastrService.error(error, "Error")
      this.update.emit();
    });
  }

  cancelEdition(): void {
    this.toastrService.warning('The provider wasn\'t edited', 'Provider edition');
    this.router.navigate(['/proveedores/list']);
    this.cancel.emit();
}


  ngOnInit() 
  {
    this.proveedor = new ProveedorDetail();
  }

}
