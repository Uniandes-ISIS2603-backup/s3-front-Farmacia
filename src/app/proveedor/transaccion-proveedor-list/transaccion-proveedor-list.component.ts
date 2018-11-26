
import { Component, OnInit, Input } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { TransaccionProveedor } from '../transaccion-proveedor';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-transaccion-proveedor-list',
  templateUrl: './transaccion-proveedor-list.component.html',
  styleUrls: ['./transaccion-proveedor-list.component.css']
})
export class TransaccionProveedorListComponent implements OnInit {

 @Input() proveedor: Proveedor;

  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute) { }

  @Input() transaccionesProveedor: TransaccionProveedor[];

  /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   //Obtiene las transacciones proveedor con todos sus atributos.
  getTransaccionesProveedor(idProveedor): void {
    this.proveedorService.getTransaccionesProveedor(idProveedor)
    .subscribe(transaccionesProveedor => this.transaccionesProveedor = transaccionesProveedor);
  }

  //Oculta el componente de crear y llama el método que trae las transacciónes del proveedor.
  ngOnInit() {
    this.showCreate = false;
    this.getTransaccionesProveedor(this.proveedor.id + "" );
  }

   /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showCreate = !this.showCreate;
}

}
