import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Registro } from '../../registro/registro';
import { RegistroListComponent } from '../../registro/registro-list/registro-list.component';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private productoService: ProductoService
  ) { }

  regOptions = ['ORDEN_REAPROVISONAMIENTO', 'TRASLADO_BODEGA', 'ROBO', 'PERDIDA', 'VENCIMIENTO'];

  nuevoProducto: Producto;

  registro: Registro;

   /**
   * The output which tells the parent component
   * that the user created a new producto
   */
   @Output() create = new EventEmitter();

   createProducto(): void {
    this.productoService.createProducto(this.registro, this.nuevoProducto)
      .then(result => {
        this.create.emit();
        this.toastr.success('El producto fue creado', 'Producto creation');
      })
      .catch(err => this.toastr.error(err, 'Error'));
}

  ngOnInit() {
    this.nuevoProducto = new Producto();
    this.registro = new Registro();
  }

}
