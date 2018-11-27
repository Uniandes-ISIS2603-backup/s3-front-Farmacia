import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Producto } from 'src/app/producto/producto';
import {ProveedorService} from '../proveedor.service';
import{ProductoService} from '../../producto/producto.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoDetail } from 'src/app/producto/producto-detail';

@Component({
  selector: 'app-proveedor-productos',
  templateUrl: './proveedor-productos.component.html',
  styleUrls: ['./proveedor-productos.component.css']
})
export class ProveedorProductosComponent implements OnInit 
{

  constructor(
    private proveedorService : ProveedorService,
    private productoService : ProductoService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
  ) { }

  @Input()idProveedor : number;
  idProducto : number;

  selectedProducto : Producto;

  productos : Producto[];
  @Output() edit = new EventEmitter();


  agregarProducto(productoId) : void{
    this.onSelected(productoId);
    this.proveedorService.agregarProducto(this.idProveedor, this.idProducto).subscribe();
    this.toastrService.success("Se agregó satisfactoriamente un producto al proveedor", "Añadir un producto al proveedor");

  }

  getProductos(): void {
    this.proveedorService.getProductos(this.idProveedor)
    .subscribe(productos => {
        this.productos = productos;
    });
  }
  onSelected(productoId): void
  {
    console.log(productoId);
    this.idProducto = productoId;
    this.selectedProducto = new ProductoDetail();
    this.productoService.getProductoDetail(this.idProducto).subscribe(selectedProducto => {
      this.selectedProducto = selectedProducto});
  }

  ngOnInit() {
    this.idProducto=+this.route.snapshot.paramMap.get('idProducto'); 
    this.getProductos();
    console.log(this.productos.length);
  }

}
