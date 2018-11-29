import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ToastrService } from 'ngx-toastr';
import { Registro } from '../registro';

@Component({
    selector: 'app-producto-create-dialog',
    templateUrl: './producto-create-dialog.component.html',
    styleUrls: ['./producto-create-dialog.component.css']
})

export class ProductoCreateDialogComponent implements OnInit {
    constructor(
      private toastr: ToastrService,
      public dialogRef: MatDialogRef<ProductoCreateDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public productoService: ProductoService) {}

    data: Producto;
    imagenes: string;
    tiposProducto = Producto.getTiposProducto();
    registro: Registro;
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
        for ( const key of Object.keys(this.registro)) {
            if (!this.registro[key]) {
                this.toastr.error('Los campos son requeridos');
                console.log(this.registro[key]);
                return;
            }
        }
        this.createProducto();
    }



    createProducto(): void {
        this.productoService.createProducto(this.registro, this.data)
          .then(result => {
            this.toastr.success('El producto fue creado', 'Producto creation');
          })
          .catch(err => this.toastr.error(err, 'Error'));
      }

    ngOnInit() {
        this.data = new Producto();
        this.registro = new Registro();
    }
}
