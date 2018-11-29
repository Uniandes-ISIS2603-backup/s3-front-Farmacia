import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Registro } from '../registro';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductoDetail } from '../producto-detail';
import { ProductoCreateDialogComponent } from './producto-create-dialog.component';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css'],
  entryComponents: [ProductoCreateDialogComponent]
})
export class ProductoCreateComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private productoService: ProductoService,
    public dialog: MatDialog
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

/**
 * Construye un nuevo dialogo y obtiene la data de este
 */
openDialog(): void {
  const dialogRef = this.dialog.open(ProductoCreateDialogComponent, {
    width: '80%',
    data: this.nuevoProducto
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.nuevoProducto.nombre = result;
  });
}

  ngOnInit() {
    this.nuevoProducto = new Producto();
    this.registro = new Registro();
    setTimeout(() => this.openDialog(), 100);
  }

}
