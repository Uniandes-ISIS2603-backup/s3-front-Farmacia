import { Component, OnInit, Input, Output } from '@angular/core';
import {ClienteService} from '../cliente.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { TransaccionClienteDetail } from '../transaccion-Cliete-detail';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'events';
import {Producto} from '../../producto/producto';


@Component({
  selector: 'app-cliente-transaccion-cliente-edit',
  templateUrl: './cliente-transaccion-cliente-edit.component.html',
  styleUrls: ['./cliente-transaccion-cliente-edit.component.css']
})
export class ClienteTransaccionClienteEditComponent implements OnInit {

  /**
   * Contructor del componente
   * @param clienteService Servicio del cliente del cual se invocan los metodos que conectan con el back
   * @param toastrService 
   * @param route 
   */
  constructor(
    private clienteService : ClienteService,
    private toastrService : ToastrService,

    private route : ActivatedRoute
  ) { }

  /**
   * el id de la transaccion que se quiere modificar
   */
  @Input()idTransaccion:number;
  /**
   * el id del cliente dueño de la transaccion
   */
  @Input()idCliente:number;
  

  @Output() actualizarProductos = new EventEmitter();

  /**
   * Metodo que agrega un producto a una transaccion por medio del idProducto
   * @param idProducto id del producto que se quiere agregar a la transaccion
   */
  agregarProducto (idProducto:number):void
  {
      
    this.clienteService.agregarProducto(this.idCliente,this.idTransaccion,idProducto).subscribe()
   
  }

  /**
   * Metodo que se ejecuto al inicialzar el componente
   */
  ngOnInit() {
    this.idCliente +this.route.snapshot.paramMap.get('idCliente');  
    
  }

}
