import { Component, OnInit , Input} from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute } from '@angular/router';
import {ProveedorDetail} from '../proveedor-detail';

@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {

  @Input() proveedorDetail: ProveedorDetail;


  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute
  ) { }


  proveedor_id: number;

  getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
        .subscribe(proveedorDetail => {
            this.proveedorDetail = proveedorDetail;
        });
}

  ngOnInit() {
    // el mas convierte el id de string a number
    this.proveedor_id = +this.route.snapshot.paramMap.get('id');
    if (this.proveedor_id) {
    this.proveedorDetail = new ProveedorDetail();
    this.getProveedorDetail();
    }
}

}
