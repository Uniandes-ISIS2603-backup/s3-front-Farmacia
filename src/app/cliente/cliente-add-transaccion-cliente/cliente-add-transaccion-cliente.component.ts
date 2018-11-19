import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import {TransaccionCliente} from '../transaccion-cliente';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';


@Component({
  selector: 'app-cliente-add-transaccion-cliente',
  templateUrl: './cliente-add-transaccion-cliente.component.html',
  styleUrls: ['./cliente-add-transaccion-cliente.component.css']
})
export class ClienteAddTransaccionClienteComponent implements OnInit, OnChanges {

  constructor(
    private clienteService: ClienteService,
    private tostrService :ToastrService


  ) { }

  @Input() cliente: Cliente;

  transaccionCliente :TransaccionCliente;

  public isCollapsed :Boolean;

  @Output() updateTransacciones = new EventEmitter;

  postTransacciones(transaccionForm:NgForm):TransaccionCliente{
    this.transaccionCliente.clinete= this.cliente;
    this.clienteService.createTransaccion(this.cliente.id,
      this.transaccionCliente).subscribe(() =>
    {
      transaccionForm.resetForm();
      this.updateTransacciones.emit();
      this.tostrService.success("Se creó la transaccion correctamente",'transaccion agregada');
    }, err =>{
      this.tostrService.error(err,'Error');
    });
    return this.transaccionCliente;
  }
  ngOnInit() {
    this.isCollapsed=false;
    
    this.transaccionCliente = new TransaccionCliente;
  }
  ngOnChanges()
  {
    this.ngOnInit();
  }

}
