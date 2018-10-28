import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoService } from './producto.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductoListComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
