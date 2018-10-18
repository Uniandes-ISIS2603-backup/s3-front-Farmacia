import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ClienteModule } from './cliente/cliente.module';
import { RegistroModule} from './registro/registro.module';
import { TransaccionProveedorModule } from './transaccion-proveedor/transaccion-proveedor.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProveedorModule,
    ClienteModule,
    RegistroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
