import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ProductoService} from '../producto.service';
import {Registro} from '../registro';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-producto-registro-edit',
    templateUrl: './producto-registro-edit.component.html',
    styleUrls: ['./producto-registro-edit.component.css'],
})
export class ProductoRegistroEditComponent implements OnInit{

    /**
     * El contructor del componente para editar un cliente
     * @param clienteService The cliente's services provider
     * @param toastrService  the toastr to show messages to the user
     * @param router 
     */
    constructor(
        private productoService: ProductoService,
        private toastrService: ToastrService,
        private route : ActivatedRoute,
        private router: Router
    ){}

    @Input()idProducto: number;

    /**
     * El cliente e editar
     */
    @Input() registro : Registro;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create a cliente
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new cliente
   */
   @Output() update = new EventEmitter();

   /**
    * Guarda los cambios que se le han hecho al cliente indicado
    */
   guardarCambios() {
    this.productoService.updateRegistro(this.idProducto, this.registro)
    .subscribe(() => {
      this.toastrService.success('Se guardaron los cambios del registro');
    }, error => {
      this.toastrService.error(error, "Error")
      this.update.emit();
    });
  }

  /**
   * Cancela la edicion de un cliente
   */
  cancelEdition(): void {
    this.toastrService.warning('The registro wasn\'t edited', 'Registro edition');
    this.router.navigate(['/productos/' + this.idProducto]);
    this.cancel.emit();
}

  /**
  * Inicializamos el componente.
  */
  ngOnInit() 
  {
    this.idProducto +this.route.snapshot.paramMap.get('idProducto'); 
    this.registro = new Registro();
  }
 
}