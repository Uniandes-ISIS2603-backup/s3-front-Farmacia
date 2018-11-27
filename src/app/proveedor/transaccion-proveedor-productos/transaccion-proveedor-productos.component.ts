import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/producto/producto';
import {ProveedorService} from '../proveedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaccion-proveedor-productos',
  templateUrl: './transaccion-proveedor-productos.component.html',
  styleUrls: ['./transaccion-proveedor-productos.component.css']
})
export class TransaccionProveedorProductosComponent implements OnInit {

  constructor(
    private servicio : ProveedorService,
    private route: ActivatedRoute
  ) { 
    
  }
  idProveedor:number;
  idTransacionProveedor:number;
  @Input()productos: Producto[];

  eliminarProducto(productoId)
  {
    this.servicio.eliminarProducto(this.idProveedor,this.idTransacionProveedor,productoId).subscribe();
  }


  ngOnInit() 
  {
    this.idProveedor=+this.route.snapshot.paramMap.get('idProveedor');
    this.idTransacionProveedor=+this.route.snapshot.paramMap.get('idTransaccionProveedor'); 
   
  }

}
