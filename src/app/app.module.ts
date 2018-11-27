import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { ProveedorModule } from './proveedor/proveedor.module';
import { ProductoModule} from './producto/producto.module';
import { ClienteModule } from './cliente/cliente.module';
import {TransaccionClienteModule} from './transaccion-cliente/transaccion-cliente.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { HttpErrorInterceptor } from './interceptors/interceptors.component';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ProveedorModule,
    AuthModule,
    ProductoModule,
    NgxPermissionsModule.forRoot(),
    ModalDialogModule.forRoot(),
    ClienteModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
     }),
    TransaccionClienteModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    }
]
})
export class AppModule { }
