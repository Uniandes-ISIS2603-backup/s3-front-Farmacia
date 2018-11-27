import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/producto/producto';
import {ProveedorService} from '../proveedor.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaccion-proveedor-productos',
  templateUrl: './transaccion-proveedor-productos.component.html',
  styleUrls: ['./transaccion-proveedor-productos.component.css']
})
export class TransaccionProveedorProductosComponent implements OnInit {

  constructor(
    private servicio : ProveedorService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
  ) { 
    
  }
  idProveedor:number;
  idTransacionProveedor:number;
  @Input()productos: Producto[];

  /**
* The output which tells the parent component
* that the user created a new transaction
*/
@Output() edit = new EventEmitter();

  eliminarProductoTransaccion(productoId)
  {
    this.servicio.eliminarProductoTransaccion(this.idProveedor,this.idTransacionProveedor,productoId).subscribe(() => {
      this.edit.emit();
      this.toastrService.success('El producto fueeliminado', 'Eliminar producto');
  }, err => {
      this.toastrService.error(err, 'Error');
  });
  }


  ngOnInit() 
  {
    this.idProveedor=+this.route.snapshot.paramMap.get('idProveedor');
    this.idTransacionProveedor=+this.route.snapshot.paramMap.get('idTransaccionProveedor'); 
   
  }

}
