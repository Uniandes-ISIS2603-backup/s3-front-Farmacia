import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoService } from './producto.service';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { RegistroListComponent } from '../registro/registro-list/registro-list.component';
import { RegistroModule } from '../registro/registro.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RegistroModule,
    FormsModule,
    MatTableModule
  ],
  declarations: [ProductoListComponent, ProductoDetailComponent, ProductoCreateComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
