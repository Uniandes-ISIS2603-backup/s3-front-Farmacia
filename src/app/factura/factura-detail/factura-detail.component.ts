import { Component, OnInit ,Input} from '@angular/core';
import { FacturaService } from '../factura.service';
import { ActivatedRoute } from '@angular/router';
import {FacturaDetail} from '../factura-detail';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  @Input() facturaDetail: FacturaDetail;

  constructor(
    private facturaService: FacturaService,
    
    private route: ActivatedRoute
  ) { }


  facturaid: number;


  getFacturaDetail(): void {
    this.facturaService.getFacturaDetail(this.facturaid)
        .subscribe(facturaDetail => {
            this.facturaDetail = facturaDetail
        });
}

  ngOnInit() {
    
    this.facturaid = +this.route.snapshot.paramMap.get('id');
    this.facturaDetail = new FacturaDetail();
    this.getFacturaDetail();
}

}
