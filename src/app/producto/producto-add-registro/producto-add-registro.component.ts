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
  /**
   * Contructor del componente
   * @param productoService The producto's service provider
   * @param tostrService the toastr to show messages to the user
   */
  constructor(
    private productoService: ProductoService,
    private tostrService :ToastrService

  ) { }

  /**
   * El producto dueno del registro
   */
  @Input() producto: Producto;

  /**
   * registro que se va a crear
   */
  registro :Registro;

  public isCollapsed :Boolean;

  /**
   * Actualiza registros
   */
  @Output() updateRegistros = new EventEmitter;

  /**
   * Crea un registro
   * @param registroForm 
   */
  async postRegistros(registroForm:NgForm)
  {
   // this.registro.producto= this.producto;
    this.productoService.createRegistro(this.producto.id,
      this.registro).subscribe(registro =>
    {
      this.registro = registro;
    }, err =>{
      this.tostrService.error(err,'Error');
    });

    await new Promise((resolve)  => setTimeout(resolve,1000));

    this.productoService.asociateRegistro(this.producto.id, this.registro.id).subscribe();

    await new Promise((resolve)  => setTimeout(resolve,1000));



      registroForm.resetForm();
      this.updateRegistros.emit();
      this.tostrService.success("Se creó el registro correctamente",'registro agregado');
    
    return this.registro;
  }

  /**
   * Metodo que se ejecuta al inicializar el componente
   */
  ngOnInit() {
    this.isCollapsed=false;
    
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
