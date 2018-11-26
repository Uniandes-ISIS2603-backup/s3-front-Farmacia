import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/producto/producto';
import {ClienteService} from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-transaccion-cliente-list',
  templateUrl: './productos-transaccion-cliente-list.component.html',
  styleUrls: ['./productos-transaccion-cliente-list.component.css']
})
export class ProductosTransaccionClienteListComponent implements OnInit {

  constructor(
    private servicio : ClienteService,
    private route: ActivatedRoute
  ) { 
    
  }
  idCliente:number;
  idTransacion:number;
  
  @Input()productos: Producto[];

  eliminarProducto(productoId)
  {
    this.servicio.eliminarProducto(this.idCliente,this.idTransacion,productoId).subscribe();
    console.log('producto:'+productoId,'cliente:'+this.idCliente,'transacción;'+this.idTransacion)
  }

  ngOnInit() 
  {
    
    this.idCliente=+this.route.snapshot.paramMap.get('idCliente');
    this.idTransacion=+this.route.snapshot.paramMap.get('idTransaccion'); 
   
  }

}
