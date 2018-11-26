import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import {TransaccionClienteDetail} from '../transaccion-Cliete-detail';


@Component({
  selector: 'app-cliente-detail-transaccion-cliente',
  templateUrl: './cliente-detail-transaccion-cliente.component.html',
  styleUrls: ['./cliente-detail-transaccion-cliente.component.css']
})
export class ClienteDetailTransaccionClienteComponent implements OnInit {

  @Input() transaccionDetail: TransaccionClienteDetail
  showEdit: boolean;

  constructor(
    private clienteService:ClienteService,
    private route: ActivatedRoute
  ){
   }
   clienteId:number;
   transaccionId:number;

   getTransaccionDetail(clienteIden,transaccionIden):void{
    this.clienteService.getTransaccionCliente(this.clienteId,this.transaccionId)
    .subscribe(transaccionDetail => {
      this.transaccionDetail = transaccionDetail;
    }
    );
   }
  ngOnInit() {
    this.showEdit=false;
    this.clienteId= +this.route.snapshot.paramMap.get('idCliente');
    this.transaccionId= +this.route.snapshot.paramMap.get('idTransaccion');
    if(this.clienteId){
      this.transaccionDetail = new TransaccionClienteDetail();
      this.getTransaccionDetail(this.clienteId,this.transaccionId);
    }
   
  }
  showHideEdit(): void {
    this.showEdit = !this.showEdit; 
  }

}
