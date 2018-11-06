    import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
    import { TransaccionClienteService } from '../transaccion-cliente.service';
import { TransaccionCliente } from '../transaccion-cliente';
import { ToastrService } from 'ngx-toastr';

    @Component({
      selector: 'app-transaccion-cliente-create',
      templateUrl: './transaccion-cliente-create.component.html',
      styleUrls: ['./transaccion-cliente-create.component.css']
    })
    export class TransaccionClienteCreateComponent implements OnInit {

      constructor(private transaccionClienteService : TransaccionClienteService,
        private toastrService: ToastrService) { }
      
        transaccionesCliente : TransaccionCliente;
      
        @Output() cancel = new EventEmitter();
        @Output() create = new EventEmitter();
      
      createTransaccionCliente():void { 
        this.transaccionClienteService.createTransaccionCliente(this.transaccionesCliente)
        .subscribe(() => {
            this.create.emit();
            this.toastrService.success("The transaction was created", "TransaccionProveedor creation");
        }, err => {
            this.toastrService.error(err, "Error"); }
      )};
      cancelCreation(): void {
        this.cancel.emit();
      }
        ngOnInit() {
          this.transaccionesCliente=new TransaccionCliente();
        }
      

    }
