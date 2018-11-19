import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import {ClienteDetail} from '../cliente-detail';
import {ClienteAddTransaccionClienteComponent} from '../cliente-add-transaccion-cliente/cliente-add-transaccion-cliente.component';



@Component({
    selector: 'app-cliente-detail',
    templateUrl: './cliente-detail.component.html',
    styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

    @Input() clienteDetail: ClienteDetail;
    showCreate: boolean;

    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute
    ) { }

    cliente_id: number;
    cliente_nombre: string;
    cliente_apellido: string;
    cliete_ciudad: string;
    cliente_direccionEnvio: string;
    cliente_cedula: number;

    @ViewChild(ClienteAddTransaccionClienteComponent) transaccionAddComponent: ClienteAddTransaccionClienteComponent;

    //transaccionesCliente

    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail;
            });
    }

    updateTransacciones(): void
    {
        this.getClienteDetail;
    }
    ngOnInit() {
        //el mas convierte el id de String a numbre
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        if(this.cliente_id){
            this.clienteDetail = new ClienteDetail();
            this.getClienteDetail();
        }
        this.showCreate=false;
    }
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
      }
    
    
}