import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto.service';

import { Producto } from '../producto';

import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-producto',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[];
  isHidden: boolean;

  columnsToDisplay: string[] = ['id', 'nombre'];

  constructor(private productoService: ProductoService) {
    // this.isHidden = (Math.random() * 2) === 0;
    this.isHidden = true;
    console.log(this.isHidden);
   }

  getProductos() {
      this.productoService.getProductos()
        .subscribe(productos => this.productos = productos);
  }

  ngOnInit() {
      this.getProductos();
  }

}
