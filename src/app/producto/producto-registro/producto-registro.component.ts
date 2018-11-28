import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registro } from '../registro';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html'
})
export class ProductoRegistroComponent implements OnInit {

  constructor(
    private productoService: ProductoService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  @Input() registros: Registro[];

  @Input() idProducto: number;

  showCreate: Boolean;

  showEdit: Boolean;

  registro_id: number;

  selectedRegistro: Registro;

  onSelected(id: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.registro_id = id;
    this.selectedRegistro = new Registro();
    this.getRegistro();
  }

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

  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.selectedRegistro = undefined;
    this.registro_id = undefined;
    this.idProducto + this.route.snapshot.paramMap.get('idProducto');
  }

}