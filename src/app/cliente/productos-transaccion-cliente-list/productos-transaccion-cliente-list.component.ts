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

  /**
   * Contructor del Componente
   * @param servicio el servicio del cliente el cual permite invocar los metodos del back
   * @param route 
   */
  constructor(
    private servicio : ClienteService,
    private route: ActivatedRoute
  ) { 
    
  }
  /**
   * id del cliente dueno de la transaccion
   */
  idCliente:number;
  /**
   * El id de la transaccion
   */
  idTransacion:number;
  /**
   * Los productos de la trasnaccion
   */
  @Input()productos: Producto[];

  /**
   * Metodo que elimina un producto de una transaccion por el idProducto
   * @param productoId el id del producto que se quiere eliminar de la transaccion
   */
  eliminarProducto(productoId)
  {
    this.servicio.eliminarProducto(this.idCliente,this.idTransacion,productoId).subscribe();
    
  }

  /**
   * Metodo que se ejecuta al inicializar el componente
   */
  ngOnInit() 
  {
    
    this.idCliente=+this.route.snapshot.paramMap.get('idCliente');
    this.idTransacion=+this.route.snapshot.paramMap.get('idTransaccion'); 
   
  }

}
