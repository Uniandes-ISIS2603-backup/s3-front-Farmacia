import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/producto/producto';

@Component({
  selector: 'app-productos-transaccion-cliente-list',
  templateUrl: './productos-transaccion-cliente-list.component.html',
  styleUrls: ['./productos-transaccion-cliente-list.component.css']
})
export class ProductosTransaccionClienteListComponent implements OnInit {

  constructor() { }
  @Input()productos: Producto[];

  ngOnInit() {
  }

}
