
import { Component, OnInit } from '@angular/core';
import { TransaccionProveedorService } from '../transaccion-proveedor.service';
import { TransaccionProveedor } from '../transaccion-proveedor';

@Component({
  selector: 'app-transaccion-proveedor-list',
  templateUrl: './transaccion-proveedor-list.component.html',
  styleUrls: ['./transaccion-proveedor-list.component.css']
})
export class TransaccionProveedorListComponent implements OnInit {

  constructor(private transaccionProveedorService : TransaccionProveedorService) { }

  transaccionesProveedor : TransaccionProveedor[];

  /**
    * Shows or hides the create component
    */
   showCreate: boolean;

  getTransaccionesProveedor():void {
    this.transaccionProveedorService.getTransaccionesProveedor().subscribe(transaccionesProveedor => this.transaccionesProveedor = transaccionesProveedor);
  }
  ngOnInit() {
    this.getTransaccionesProveedor();
    this.showCreate = false;
  }

   /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showCreate = !this.showCreate!
}

}
