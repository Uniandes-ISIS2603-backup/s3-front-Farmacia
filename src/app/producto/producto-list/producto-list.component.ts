import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../producto.service';

import { Producto } from '../producto';

import {MatTableModule} from '@angular/material/table';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-producto',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[];
  isHidden: boolean;

  columnsToDisplay: string[] = ['id', 'nombre'];

  constructor(private productoService: ProductoService, config: NgbCarouselConfig) {
    // this.isHidden = (Math.random() * 2) === 0;
    this.isHidden = true;
    console.log(this.isHidden);
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  getProductos() {
      this.productoService.getProductos()
        .subscribe(productos => this.productos = productos);
  }

  ngOnInit() {
      this.getProductos();
  }

}
