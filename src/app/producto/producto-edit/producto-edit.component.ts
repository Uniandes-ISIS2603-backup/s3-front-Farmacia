import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { ProductoDetail } from '../producto-detail';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<ProductoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public editInterface: EditInterface
    ) { this.data = editInterface.product; this.productoService = editInterface.service; }
    data: Producto;
    productoService: ProductoService;
    imagenes: string;
    tiposProducto = Producto.getTiposProducto();

  onNoClick(): void {
    this.dialogRef.close();
  }

  send(): void {
      if (!this.imagenes) {
          this.toastr.error('Los campos son requeridos');
          return;
      }
      this.data.fotos = this.imagenes.split(',');
      this.data.videos = this.data.fotos;
      for (const key of Object.keys(this.data)) {
          console.log(this.data[key]);
          if (!this.data[key]) {
              this.toastr.error('Los campos son requeridos');
              return;
          }
      }
      this.editProducto();
  }

  deleteProducto() {
    this.productoService.deleteProducto(this.data)
    .then(result => {
      this.toastr.success('El producto fue eliminado', 'Producto delete');
      this.dialogRef.close();
    })
    .catch(err => {
      this.toastr.error(err, 'Error');
      this.dialogRef.close();
    });
  }

  editProducto() {
    this.productoService.editProducto(this.data)
    .then(result => {
      this.toastr.success('El producto fue editado', 'Producto edit');
      this.dialogRef.close();
    })
    .catch(err => this.toastr.error(err, 'Error'));
  }

  ngOnInit() {
    console.log(this.data.precio);
  }

}

export interface EditInterface {
  service: ProductoService;
  product: ProductoDetail;
}
