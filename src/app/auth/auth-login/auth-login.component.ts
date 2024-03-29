import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

import { Cliente } from '../../cliente/cliente';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { TransaccionCliente } from '../../cliente/transaccion-cliente';



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
        private clienteService: ClienteService,
        private router:Router
    ) { }

    user: User;

    roles: String[];

    cliente: Cliente;

    cedula_log: number;

    clienteId: number;

    transaccionId : number;


    loguear: boolean;

    transaccion: TransaccionCliente;


    /**
     * Crea una transaccion cliente a la sesiom
     * @param pTransaccion
     */
    postTransacciones(pTransaccion:TransaccionCliente): void{
        
        
        this.clienteService.createTransaccion(this.cliente.id,
            pTransaccion).subscribe(transaccione => 
        {
            this.transaccion = transaccione;
            this.transaccionId = transaccione.id;
            
        //  this.toastrService.success("Se creó la transaccion correctamente",'transaccion agregada');
        }, err =>{
            
          this.toastrService.error(err,'Error');
        });

      }

    /**
    * Logs the user in with the selected role
    */
    
    
    getClienteByCedula(): void {
        this.clienteService.getClienteDetailByCedula(this.cedula_log)
            .subscribe(cliente => {
                this.cliente = cliente;
                this.clienteId=cliente.id;
                this.loguear = true;
                console.log(this.cliente.id)
                if(this.cliente.cedula==undefined)
                {
                
                }
            }, error => {
                this.toastrService.error(error, 'No existe un cliente con esa cedula');
                this.loguear = false;
            });
    }


    /**
     * Obtiene la ultima transaccion 
     */
    getultimaTransaccion():void{
        this.clienteService.getUltimaTransaccion(this.clienteId)
        .subscribe(transaccione => {
            this.transaccion = transaccione;
            this.transaccionId = transaccione.id;
            
       //   this.toastrService.success('Se guardaron los cambios de la transaccion');
        }, error => {
          this.toastrService.error(error, "Error")
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
        this.clienteId = undefined;
        this.transaccionId = undefined;
        this.roles = ['Administrator', 'Client'];
        this.transaccion= new TransaccionCliente();
        this.transaccion.monto=0;
        this.transaccion.parcial=true;
        this.transaccion.tiempo=0;
        this.transaccion.tipoDePago='efectivo';
    }

    /**
     * Metodo para loguear un cliente
     */
    async login(){

        this.cedula_log = this.user.cedula;

        
        if (this.user.role == 'Administrator') {
            this.loguear = true;
            this.authService.login(this.user.cedula, this.user.role);
            this.router.navigateByUrl('/productos/list');

        }
        else if (this.user.role == 'Client') {

            try{
            
            this.authService.login(this.user.cedula, this.user.role);

            await new Promise((resolve)  => setTimeout(resolve,1000));


            this.getClienteByCedula();

            
            await new Promise((resolve)  => setTimeout(resolve,1000));
                if(this.cliente.cedula===undefined)
                {
                    this.authService.setGuestRole()
                    console.log(this.user.role);
                    await new Promise((resolve)  => setTimeout(resolve,500));
                    this.router.navigateByUrl('/productos/list');
                }
                else
                {
            this.postTransacciones(this.transaccion);

            await new Promise((resolve)  => setTimeout(resolve,2000));

            this.getultimaTransaccion();

            await new Promise((resolve)  => setTimeout(resolve,200));

            console.log(this.clienteId);
            this.router.navigateByUrl('/clientes/'+this.clienteId + '/transacciones/' + this.transaccionId);

            await new Promise((resolve)  => setTimeout(resolve,2000));
            this.toastrService.success('Logged in')
        }
    }
        catch(err)
        {
            this.router.navigateByUrl('/productos/list');
        }

        }
        if (this.loguear === true) {
        }
    }


    


}