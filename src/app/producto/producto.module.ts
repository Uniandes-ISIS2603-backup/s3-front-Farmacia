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
import {ProductoRegistroEditComponent} from './producto-registro-edit/producto-registro-edit.component'
import { ProductoRegistroComponent} from './producto-registro/producto-registro.component';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule, MatGridListModule, MatIconModule } from '@angular/material';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ProductoCreateDialogComponent } from './producto-create/producto-create-dialog.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';








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
    MaterialModule,
    //RegistroModule,
    FormsModule,
    NgxPermissionsModule
    //MatTableModule,
    //FormsModule
  ],
  declarations: [ProductoListComponent, ProductoDetailComponent, ProductoCreateComponent,
   ProductoRegistroComponent, ProductoAddRegistroComponent, ProductoRegistroEditComponent, ProductoCreateDialogComponent, ProductoEditComponent],
  providers: [ProductoService, NgbCarouselConfig],
  entryComponents: [ProductoCreateDialogComponent, ProductoEditComponent, ProductoAddRegistroComponent]
})
export class ProductoModule { }