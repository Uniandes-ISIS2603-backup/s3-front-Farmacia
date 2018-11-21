import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProveedorModule } from './proveedor/proveedor.module';
import { ProductoModule} from './producto/producto.module';
//import { FacturaModule } from './factura/factura.module';
import { ClienteModule } from './cliente/cliente.module';
import {TransaccionClienteModule} from './transaccion-cliente/transaccion-cliente.module';
import { ToastrModule } from 'ngx-toastr';







@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ProveedorModule,
    ProductoModule,
    NgxPermissionsModule.forRoot(),
    //FacturaModule,
    ClienteModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
     }),
    TransaccionClienteModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
