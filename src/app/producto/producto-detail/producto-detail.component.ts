import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetail } from '../producto-detail';
import {ProductoAddRegistroComponent} from '../producto-add-registro/producto-add-registro.component';
import { MatDialog } from '@angular/material';
import { ProductoEditComponent } from '../producto-edit/producto-edit.component';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  productoId: string;
  productoDetail: ProductoDetail;
  showCreate: boolean;

  @ViewChild(ProductoAddRegistroComponent) registroAddComponent: ProductoAddRegistroComponent;

  ngOnInit() {
    this.productoId = this.route.snapshot.paramMap.get('id');
    this.getProductById();
    this.showCreate = false;
  }

  getProductById() {
    this.productoService.getProductoDetail(this.productoId).subscribe(
      productoDetail => {
        this.productoDetail = productoDetail;
        console.log(productoDetail.registros);
      });
  }

  updateRegistros(): void
    {
        this.getProductById();
    }

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductoEditComponent, {
      width: '80%',
      data: {service: this.productoService, product: this.productoDetail}
    });
  }

  createRegistro(): void {
    const dialogRef = this.dialog.open(ProductoAddRegistroComponent, {
      width: '80%',
      data: {service: this.productoService, product: this.productoDetail}
    });
    this.ngOnInit();
  }

}
