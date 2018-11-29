import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Producto } from '../producto';

@Component({
    selector: 'app-producto-create-dialog',
    templateUrl: './producto-create-dialog.component.html'
})

export class ProductoCreateDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<ProductoCreateDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Producto) {}

    tiposProducto = Producto.getTiposProducto();
    onNoClick(): void {
      this.dialogRef.close();
    }
}
