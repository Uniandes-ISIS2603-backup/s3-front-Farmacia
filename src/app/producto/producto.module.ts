import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoService } from './producto.service';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { FormsModule } from '@angular/forms';
import {ProductoAddRegistroComponent} from './producto-add-registro/producto-add-registro.component'
import { ProductoRegistroComponent} from './producto-registro/producto-registro.component';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    MatCommonModule,
    MatCardModule,
    MatGridListModule,
    NgbCarouselModule,
    MatIconModule,
    //RegistroModule,
    FormsModule,
    //MatTableModule,
    //FormsModule
  ],
  declarations: [ProductoListComponent, ProductoDetailComponent, ProductoCreateComponent,
   ProductoRegistroComponent, ProductoAddRegistroComponent],
  providers: [ProductoService, NgbCarouselConfig]
})
export class ProductoModule { }