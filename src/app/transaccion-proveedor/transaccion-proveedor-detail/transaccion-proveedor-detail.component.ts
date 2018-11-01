import { Component, OnInit } from '@angular/core';
import { TransaccionProveedorService } from '../transaccion-proveedor.service';
import { ActivatedRoute } from '@angular/router';
  import {TransaccionProveedorDetail} from '../transaccion-proveedor-detail';

@Component({
  selector: 'app-transaccion-proveedor-detail',
  templateUrl: './transaccion-proveedor-detail.component.html',
  styleUrls: ['./transaccion-proveedor-detail.component.css']
})
export class TransaccionProveedorDetailComponent implements OnInit {

  constructor(
    private transaccionProveedorService: TransaccionProveedorService,
    private route: ActivatedRoute
  ) { }


  transaccionProveedor_id: number;

  transaccionProveedorDetail : TransaccionProveedorDetail;

  getTransaccionProveedorDetail(): void {
    this.transaccionProveedorService.getTransaccionProveedorDetail(this.transaccionProveedor_id)
        .subscribe(transaccionProveedorDetail => {
            this.transaccionProveedorDetail = transaccionProveedorDetail
        });
}

  ngOnInit() {
    //el mas convierte el id de string a number
    this.transaccionProveedor_id = +this.route.snapshot.paramMap.get('id');
    this.transaccionProveedorDetail = new TransaccionProveedorDetail();
    this.getTransaccionProveedorDetail();
}

}
