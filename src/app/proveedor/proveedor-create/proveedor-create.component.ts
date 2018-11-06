import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {


  proveedor : Proveedor;



  constructor(
    private proveedorService : ProveedorService,
    private toastrService : ToastrService
  ) { }

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  createProveedor(): Proveedor {
    this.proveedorService.createProveedor(this.proveedor)
    .subscribe((proveedor) => {
      this.proveedor = proveedor;
      this.create.emit();
      this.toastrService.success("El proveedor fue creado", "Creación proveedor");
    });
    return this.proveedor;
  }

  cancelCreation(): void {
    this.cancel.emit();
}

  ngOnInit() {
    this.proveedor = new Proveedor();
  }

}
