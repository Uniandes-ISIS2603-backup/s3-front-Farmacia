import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorService } from './proveedor.service';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';
import { TransaccionProveedorDetailComponent } from './transaccion-proveedor-detail/transaccion-proveedor-detail.component';
import { TransaccionProveedorCreateComponent } from './transaccion-proveedor-create/transaccion-proveedor-create.component';
import { TransaccionProveedorListComponent } from './transaccion-proveedor-list/transaccion-proveedor-list.component';
import { ProveedorEditComponent } from './proveedor-edit/proveedor-edit.component';
import {ProductoModule} from '../producto/producto.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



/**
* Importaciones, declaraciones y recursos necesarios para que el ente proveedor se desarrolle en sus componentes.
*/
@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ProductoModule,
        NgxPermissionsModule,
        NgbCarouselModule
  ],
  declarations: [ProveedorListComponent, ProveedorDetailComponent, ProveedorCreateComponent, TransaccionProveedorCreateComponent, TransaccionProveedorDetailComponent, TransaccionProveedorListComponent, ProveedorEditComponent],
  providers : [ProveedorService]
})
export class ProveedorModule { }
