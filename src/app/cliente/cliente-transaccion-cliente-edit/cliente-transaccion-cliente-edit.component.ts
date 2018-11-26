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

  constructor(
    private clienteService : ClienteService,
    private toastrService : ToastrService,

    private route : ActivatedRoute
  ) { }

  
  @Input()idTransaccion:number;
  @Input()idCliente:number;
  idProducto:number;

  @Output() actualizarProductos = new EventEmitter();

  agregarProducto (idForm:NgForm):void
  {
      
    this.clienteService.agregarProducto(this.idCliente,this.idTransaccion,this.idProducto) 
   
  }

  ngOnInit() {
    this.idCliente +this.route.snapshot.paramMap.get('idCliente');  
    this.idTransaccion= +this.route.snapshot.paramMap.get('idTransaccion');
  }

}
