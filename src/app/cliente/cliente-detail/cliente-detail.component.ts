import { Component, OnInit ,Input} from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import {ClienteDetail} from '../cliente-detail';

@Component({
    selector: 'app-cliente-detail',
    templateUrl: './cliente-detail.component.html',
    styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

    @Input() clienteDetail: ClienteDetail;

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

    transaccionesCliente

    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail;
            });
    }

    ngOnInit() {
        //el mas convierte el id de String a numbre
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        if(this.cliente_id){
            this.clienteDetail = new ClienteDetail();
            this.getClienteDetail();
        }
    }
    
}