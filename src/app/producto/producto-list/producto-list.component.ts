import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto.service';

import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[];
  constructor(private productoService: ProductoService) { }

  getProductos() {
      this.productoService.getProductos()
        .subscribe(productos => this.productos = productos);
  }

  ngOnInit() {
      this.getProductos();
  }

}
