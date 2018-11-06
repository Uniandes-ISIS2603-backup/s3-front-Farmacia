import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoService } from './producto.service';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ProductoCreateComponent } from './producto-create/producto-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ProductoListComponent, ProductoDetailComponent, ProductoCreateComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
