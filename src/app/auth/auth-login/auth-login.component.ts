import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';

import { Cliente } from '../../cliente/cliente'
import { ClienteService } from 'src/app/cliente/cliente.service';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private clienteService: ClienteService
    ) { }

    user: User;

    roles: String[];

    cliente: Cliente;

    cedula_log: Number;

    loguear: boolean;

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        console.log("ESTO ES EL COMPONENTE LOGIN " + this.user.cedula + "  rol: " + this.user.role)
        this.cedula_log = this.user.cedula;


        if (this.user.role == 'Administrator') {
            this.loguear = true;
        }
        else if (this.user.role == 'Client') {
            this.getClienteByCedula();

        }
        if (this.loguear === true) {
            this.authService.login(this.user.cedula, this.user.role);
            this.toastrService.success('Logged in')
        }
    }

    getClienteByCedula(): void {
        console.log("ESTO ES EL METODO GETCLIENTEBYCEDULA DEL COMPONENTE" + " " + this.cedula_log)
        this.clienteService.getClienteDetailByCedula(this.cedula_log)
            .subscribe(cliente => {
                this.cliente = cliente
                this.loguear = true;
            }, error => {
                this.toastrService.error(error, "No existe un cliente con esa cedula")
                this.loguear = false;
            });
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.cliente = new Cliente();
        this.cedula_log = undefined;
        this.loguear = undefined;
        this.roles = ['Administrator', 'Client'];
    }



}