import { Component, OnInit, Input } from '@angular/core';

import { ProductoService } from '../producto.service';
import {ProductoDetail} from '../producto-detail';

import { Producto } from '../producto';

import { ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ClienteService} from '../../cliente/cliente.service';
import { TransaccionClienteDetail } from '../../cliente/transaccion-Cliete-detail'; 


@Component({
  selector: 'app-producto',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class    ProductoListComponent implements OnInit {

  productos: Producto[];
  isHidden: boolean;
  carrito:TransaccionClienteDetail;
  productosCarrito:Producto[];
  showCarrito:boolean;

  idCliente: number;
  idTransacion: number;
  subtotal:number;

  constructor(private productoService: ProductoService, config: NgbCarouselConfig,
    private agregar: ClienteService,
    private route: ActivatedRoute,
    ) {
    this.isHidden = true;
    console.log(this.isHidden);
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

   async anadirProducto(idProducto) {
    
    this.agregar.agregarProducto(this.idCliente, this.idTransacion, idProducto).subscribe();
    
    await new Promise((resolve)  => setTimeout(resolve,200));
    this.total();
    
    this.ngOnInit();
    this.showCarrito = true;
   }

  getProductos() {
      this.productoService.getProductos()
        .subscribe(productos => this.productos = productos);
  }

  getCarrito() {
    if(this.idTransacion !== 0)
    {
    this.agregar.getTransaccionCliente(this.idCliente, this.idTransacion)
    .subscribe(transaccionDetail => {
      this.carrito = transaccionDetail
      this.productosCarrito= this.carrito.productos;
    });
  }
    
  }
  total() {
    for (let i = 0; this.productosCarrito && i < this.productosCarrito.length; i++) {
      const num = this.productosCarrito[i];
      this.subtotal = this.subtotal + num.precio;
    }
  }
 async eliminarProducto(idProducto)
  {
    await this.agregar.eliminarProducto(this.idCliente, this.idTransacion, idProducto).toPromise();
    await this.ngOnInit();
    this.total();
    this.showCarrito = true;
  }

  ShowCarrito() {
    this.showCarrito = !this.showCarrito;
  }

  async ngOnInit() {
    this.idCliente = +this.route.snapshot.paramMap.get('idCliente');
    this.idTransacion = +this.route.snapshot.paramMap.get('idTransaccion');
    this.carrito = new TransaccionClienteDetail();
    this.showCarrito = false;
    this.subtotal = 0;
    this.getProductos();
    console.log('cargar');
    this.getCarrito();
  }

}
