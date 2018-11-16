import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoService } from './producto.service';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
//import { RegistroListComponent } from '../registro/registro-list/registro-list.component';
import { RegistroModule } from '../registro/registro.module';
import { FormsModule } from '@angular/forms';
import {ProductoAddRegistroComponent} from './producto-add-registro/producto-add-registro.component'
import { ProductoRegistroComponent} from './producto-registro/producto-registro.component';





@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RegistroModule,
    FormsModule
  ],
  declarations: [ProductoListComponent, ProductoDetailComponent, ProductoCreateComponent,
   ProductoRegistroComponent, ProductoAddRegistroComponent],
  providers: [ProductoService]
})
export class ProductoModule { }
