import { Component, OnInit, Input, OnChanges, EventEmitter, Output, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import {Registro} from '../registro';
import {ProductoService} from '../producto.service';
import {Producto} from '../producto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductoEditComponent, EditInterface } from '../producto-edit/producto-edit.component';


@Component({
  selector: 'app-producto-add-registro',
  templateUrl: './producto-add-registro.component.html',
  styleUrls: ['./producto-add-registro.component.css']
})
export class ProductoAddRegistroComponent implements OnInit, OnChanges {
  /**
   * Contructor del componente
   * @param productoService The producto's service provider
   * @param tostrService the toastr to show messages to the user
   */
  constructor(
    private productoService: ProductoService,
    private tostrService: ToastrService,
    public dialogRef: MatDialogRef<ProductoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public editInterface: EditInterface
  ) { this.producto = editInterface.product; this.productoService = editInterface.service; }

  /**
   * El producto dueno del registro
   */
  producto: Producto;

  /**
   * registro que se va a crear
   */
  registro: Registro;

  /**
   * Actualiza registros
   */
  @Output() updateRegistros = new EventEmitter;

  async send() {
    await this.productoService.createRegistro(this.producto.id, this.registro).subscribe(registro => {
      this.registro = registro;
      this.productoService.asociateRegistro(this.producto.id, this.registro.id).subscribe(result => {
        this.updateRegistros.emit();
        this.tostrService.success('Se creó el registro correctamente', 'registro agregado');
      });
      this.dialogRef.close();
    }, err => {
      this.tostrService.error(err, 'Error');
    });
  }


  /**
   * Metodo que se ejecuta al inicializar el componente
   */
  ngOnInit() {
    this.registro = new Registro();
  }

  /**
   * MEtodo que se ejecuta cuando hay cambios en el componente
   */
  ngOnChanges()
  {
    this.ngOnInit();
  }

}

