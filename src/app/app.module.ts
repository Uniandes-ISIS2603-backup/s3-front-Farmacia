import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { ProveedorModule } from './proveedor/proveedor.module';
import { ProductoModule} from './producto/producto.module'
import { TransaccionProveedorModule } from './transaccion-proveedor/transaccion-proveedor.module';
import { FacturaModule } from './factura/factura.module';
import { ClienteModule } from './cliente/cliente.module';
import { RegistroModule} from './registro/registro.module';
 


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
    ClienteModule,
    RegistroModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
