import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import {ClienteDetail} from '../cliente-detail';
import {ClienteAddTransaccionClienteComponent} from '../cliente-add-transaccion-cliente/cliente-add-transaccion-cliente.component';

/**
 * Representa el componente detalle de un cliente
 */
@Component({
    selector: 'app-cliente-detail',
    templateUrl: './cliente-detail.component.html',
    styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

    /**
     * El cliente detallado
     */
    @Input() clienteDetail: ClienteDetail;
    showCreate: boolean;

    /**
     * Contructor for the detailCliente component
     * @param clienteService The cliente's services supplier
     * @param route The route which helps to retrieves the id of the cliente to be shown
     */
    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute
    ) { }

    /**
     * el id del cliente
     */
    cliente_id: number;

    @ViewChild(ClienteAddTransaccionClienteComponent) transaccionAddComponent: ClienteAddTransaccionClienteComponent;

    //transaccionesCliente

    /**
     * Obtiene el cliente detail del cual se quiere saber la informacion
     */
    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail;
            });
    }

    /**
     * Actualiza las transacciones del cliente
     */
    updateTransacciones(): void
    {
        this.getClienteDetail();
    }

        /**
    * The method which initializes the component.
    * We need to create the cliente so it is never considered as undefined
    */
    ngOnInit() {
        //el mas convierte el id de String a numbre
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        if(this.cliente_id){
            this.clienteDetail = new ClienteDetail();
            this.getClienteDetail();
        }
        this.showCreate=false;
    }
    /**
     * Muestra o esconde el modulo crear de una transaccion
     */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
      }
    
    
}