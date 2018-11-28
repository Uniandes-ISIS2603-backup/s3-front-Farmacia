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

  /**
   * Contructor del componente
   * @param clienteService 
   * @param route 
   */
  constructor(
    private clienteService:ClienteService,
    private route: ActivatedRoute
  ){
   }
   /**
    * Id del dueño de la transaccion
    */
   clienteId:number;
   /**
    * Id d ela transaccion de la cual se quiere saber el detail
    */
   transaccionId:number;

   /**
    * Obtiene el detail de la transaccion especificada por el id del cliente y el id de la transaccion
    * @param clienteIden id del cliente dueno de la transaccion
    * @param transaccionIden id de la trasaccion de la cual se quiere saber el detail
    */
   getTransaccionDetail(clienteIden,transaccionIden):void{
    this.clienteService.getTransaccionCliente(this.clienteId,this.transaccionId)
    .subscribe(transaccionDetail => {
      this.transaccionDetail = transaccionDetail;
    }
    );
   }
   /**
    * Metodo que se ejecuta cuando se inicializa el componente
    */
  ngOnInit() {
    this.showEdit=false;
    this.clienteId= +this.route.snapshot.paramMap.get('idCliente');
    this.transaccionId= +this.route.snapshot.paramMap.get('idTransaccion');
    if(this.clienteId){
      this.transaccionDetail = new TransaccionClienteDetail();
      this.getTransaccionDetail(this.clienteId,this.transaccionId);
    }
   
  }
  /**
   * Muestra o esconde el componente editar de la transaaccion
   */
  showHideEdit(): void {
    this.showEdit = !this.showEdit; 
  }

}
