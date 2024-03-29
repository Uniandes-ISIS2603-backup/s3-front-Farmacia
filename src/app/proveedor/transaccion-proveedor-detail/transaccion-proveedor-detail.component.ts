import { Component, OnInit, Input } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute } from '@angular/router';
  import {TransaccionProveedorDetail} from '../transaccion-proveedor-detail';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-transaccion-proveedor-detail',
  templateUrl: './transaccion-proveedor-detail.component.html',
  styleUrls: ['./transaccion-proveedor-detail.component.css']
})
export class TransaccionProveedorDetailComponent implements OnInit {
  //Constructor del detail de transacción proveedor.
  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute
  ) { }

  showEdit: boolean;

  transaccionProveedor_id: number;
  proveedorId:number;
//Atributo que corresponde al detail de transacción proveedor con todos sus productos.
  @Input() transaccionProveedorDetail: TransaccionProveedorDetail;

  //Obtiene el detail de transacción proveedor.
  getTransaccionProveedorDetail(): void {
    this.proveedorService.getTransaccionProveedorDetail(this.transaccionProveedor_id, this.proveedorId)
        .subscribe(transaccionProveedorDetail => {
            this.transaccionProveedorDetail = transaccionProveedorDetail;
        });
}

  ngOnInit() {
  
    // el mas convierte el id de string a number
    this.showEdit=false;
    this.transaccionProveedor_id = +this.route.snapshot.paramMap.get('idTransaccionProveedor');
    this.proveedorId = +this.route.snapshot.paramMap.get('idProveedor');
    this.transaccionProveedorDetail = new TransaccionProveedorDetail();
    if(this.proveedorId){
      this.getTransaccionProveedorDetail();
    }
  
}
showHideEdit(): void {
  this.showEdit = !this.showEdit; 
}

}
