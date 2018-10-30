import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionProveedorListComponent } from './transaccion-proveedor-list/transaccion-proveedor-list.component';
import { TransaccionProveedorService } from './transaccion-proveedor.service';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { TransaccionProveedorDetailComponent } from './transaccion-proveedor-detail/transaccion-proveedor-detail.component';
@NgModule({
  imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
  ],
  declarations: [TransaccionProveedorListComponent, TransaccionProveedorDetailComponent],
  providers : [TransaccionProveedorService],
  exports:[TransaccionProveedorListComponent]
  
 
})
export class TransaccionProveedorModule { }
