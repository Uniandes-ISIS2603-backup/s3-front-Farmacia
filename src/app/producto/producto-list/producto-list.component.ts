import { Component, OnInit, Input } from '@angular/core';

import { ProductoService } from '../producto.service';

import { Producto } from '../producto';

import { ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {ClienteService} from '../../cliente/cliente.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class    ProductoListComponent implements OnInit {

  productos: Producto[];
  isHidden: boolean;

  idCliente: number;
  idTransacion: number;

  constructor(private productoService: ProductoService, config: NgbCarouselConfig,
    private agregar: ClienteService,
    private route: ActivatedRoute) {
    this.isHidden = true;
    console.log(this.isHidden);
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

   anadirProducto(idProducto) {
    this.agregar.agregarProducto(this.idCliente, this.idTransacion, idProducto).subscribe();
   }

  getProductos() {
      this.productoService.getProductos()
        .subscribe(productos => this.productos = productos);
  }

  ngOnInit() {
    this.idCliente = +this.route.snapshot.paramMap.get('idCliente');
    this.idTransacion = +this.route.snapshot.paramMap.get('idTransaccion');
      this.getProductos();
  }

}
