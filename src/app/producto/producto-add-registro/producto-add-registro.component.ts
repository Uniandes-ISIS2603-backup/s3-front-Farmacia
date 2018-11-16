import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import {Registro} from '../registro';
import {ProductoService} from '../producto.service';
import {Producto} from '../producto';


@Component({
  selector: 'app-producto-add-registro',
  templateUrl: './producto-add-registro.component.html',
  styleUrls: ['./producto-add-registro.component.css']
})
export class ProductoAddRegistroComponent implements OnInit, OnChanges {

  constructor(
    private productoService: ProductoService,
    private tostrService :ToastrService


  ) { }

  @Input() producto: Producto;

  registro :Registro;

  public isCollapsed :Boolean;

  @Output() updateRegistros = new EventEmitter;

  postRegistros(registroForm:NgForm):Registro{
    this.registro.producto= this.producto;
    this.productoService.createRegistro(this.producto.id,
      this.registro).subscribe(() =>
    {
      registroForm.resetForm();
      this.updateRegistros.emit();
      this.tostrService.success("Se creó el registro correctamente",'registro agregado');
    }, err =>{
      this.tostrService.error(err,'Error');
    });
    return this.registro;
  }
  ngOnInit() {
    this.isCollapsed=false;
    
    this.registro = new Registro;
  }
  ngOnChanges()
  {
    this.ngOnInit();
  }

}
