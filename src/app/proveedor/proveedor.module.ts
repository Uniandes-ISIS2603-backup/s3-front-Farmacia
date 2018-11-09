import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorService } from './proveedor.service';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import {TransaccionProveedorModule} from '../transaccion-proveedor/transaccion-proveedor.module';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component'

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
        TransaccionProveedorModule
  ],
  declarations: [ProveedorListComponent, ProveedorDetailComponent, ProveedorCreateComponent],
  providers : [ProveedorService]
})
export class ProveedorModule { }
