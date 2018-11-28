import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registro } from '../registro';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-registro',
  styleUrls: ['./producto-registro.component.css'],
  templateUrl: './producto-registro.component.html'
})
export class ProductoRegistroComponent implements OnInit {

  /**
   * 
   * @param productoService The producto's services provider
   * @param toastrService the toastr to show messages to the user
   * @param router 
   * @param route 
   */
  constructor(
    private productoService: ProductoService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  /**
   * La lista de registros del producto
   */
  @Input() registros: Registro[];

  /**
   * El id del producto dueno de los registros
   */
  @Input() idProducto: number;

  /**
   * Booleano que indica si s eesta mostrando o no el componente crear registro
   */
  showCreate: Boolean;

  /**
   * Booleano que indica si se esta mostrando el componente editar del registro
   */
  showEdit: Boolean;

  /**
   * El id del registro
   */
  registro_id: number;

  /**
   * El registro seleccionado
   */
  selectedRegistro: Registro;

  /**
   * Selecciona un registro
   * @param id el id del registro seleccionado
   */
  onSelected(id: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.registro_id = id;
    this.selectedRegistro = new Registro();
    this.getRegistro();
  }

  /**
   * Muestra no no muestra el componente crear de un registro
   */
  showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }

  /**
   * Shows or hides the edit component
   * @param registro_id 
   */
  showHideEdit(registro_id: number): void {
    if (!this.showEdit || (this.showEdit && registro_id != this.selectedRegistro.id)) {
      this.showCreate = false;
      this.showEdit = true;
      this.registro_id = registro_id;
      this.selectedRegistro = new Registro();
      this.getRegistro();
    }
    else {
      this.showEdit = false;
    }
  }

  /**
   * Get the registro
   */

  getRegistro(): void {
    this.productoService.getRegistro(this.idProducto, this.registro_id)
      .subscribe(selectedRegistro => {
        this.selectedRegistro = selectedRegistro
      });
  }

  /**
   * Update the registro
   */
  updateRegistro(): void {
    this.showEdit = false;
  }

  /**
   * Metodo que se ejecuta al inicializar el componente
   */
  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.selectedRegistro = undefined;
    this.registro_id = undefined;
    this.idProducto + this.route.snapshot.paramMap.get('idProducto');
  }

}