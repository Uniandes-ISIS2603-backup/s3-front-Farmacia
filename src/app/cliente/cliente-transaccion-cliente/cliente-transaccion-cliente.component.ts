import { Component, OnInit, Input, } from '@angular/core';
import {TransaccionCliente} from '../transaccion-cliente';
import {ClienteService} from '../cliente.service';
import { TransaccionClienteDetail } from 'src/app/transaccion-cliente/transaccion-cliente-detail';

@Component({
  selector: 'app-cliente-transaccion-cliente',
  templateUrl: './cliente-transaccion-cliente.component.html'
})
export class ClienteTransaccionClienteComponent implements OnInit {
  
  /**
   * Las trasnacciones del cliente
   */
  @Input() transacciones : TransaccionClienteDetail; 
  /**
   * El id del cliente el cual se esta viendo las trasnacciones
   */
  @Input() clienteId:number;
  
  @Input() transaccionClienteId:number;

  /**
   * Atributo que indica si se esta mostrando el componente crearTransaccionCliente
   */
  showCreate :Boolean;

  /**
   * El contructor del componente
   * @param clienteService El servicio del cliente desde el cual se ejecutan los metodos que conectan con el back
   */
  constructor(private clienteService: ClienteService) { }

  /**
   * Metodo que se ejecuta cuando se inicializa el componente
   */
  ngOnInit() 
  {
    this.showCreate = false;
  }
  /**
   * Metodo para mostrar o esconde el componente para crear una transaccionCliente
   */
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

}
