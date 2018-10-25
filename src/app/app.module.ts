import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { ProveedorModule } from './proveedor/proveedor.module';
import { ProductoModule} from './producto/producto.module'
import { TransaccionProveedorModule } from './transaccion-proveedor/transaccion-proveedor.module';
import { FacturaModule } from './factura/factura.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProveedorModule,
    ProductoModule,
    TransaccionProveedorModule,
    FacturaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
