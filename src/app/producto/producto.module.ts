import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoService } from './producto.service';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductoListComponent, ProductoDetailComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
