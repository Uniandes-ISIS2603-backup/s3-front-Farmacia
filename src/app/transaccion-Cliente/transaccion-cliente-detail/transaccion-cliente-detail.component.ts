import { Component, OnInit } from '@angular/core';
import { TransaccionClienteService } from '../transaccion-cliente.service';
import { ActivatedRoute } from '@angular/router';
import {TransaccionClienteDetail} from '../transaccion-cliente-detail';

@Component({
  selector: 'app-transaccion-cliente-detail',
  templateUrl: './transaccion-cliente-detail.component.html',
  styleUrls: ['./transaccion-cliente-detail.component.css']
})
export class TransaccionClienteDetailComponent implements OnInit {

  constructor(
    private transaccionClienteService: TransaccionClienteService,
    
    private route: ActivatedRoute
  ) { }


  transaccionClienteid: number;

  transaccionClienteDetail : TransaccionClienteDetail;

  getTransaccionClienteDetail(): void {
    this.transaccionClienteService.getTransaccionClienteDetail(this.transaccionClienteid)
        .subscribe(transaccionClienteDetail => {
            this.transaccionClienteDetail = transaccionClienteDetail
        });
}

  ngOnInit() {
    
    this.transaccionClienteid = +this.route.snapshot.paramMap.get('id');
    this.transaccionClienteDetail = new TransaccionClienteDetail();
    this.getTransaccionClienteDetail();
}

}
