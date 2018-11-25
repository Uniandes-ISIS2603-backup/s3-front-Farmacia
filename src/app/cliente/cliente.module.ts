import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { TransaccionClienteModule } from '../transaccion-cliente/transaccion-cliente.module';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteEditComponent} from './cliente-edit/cliente-edit.component';
import {ClienteAddTransaccionClienteComponent} from './cliente-add-transaccion-cliente/cliente-add-transaccion-cliente.component'
import {ClienteDetailTransaccionClienteComponent} from './cliente-detail-transaccion-cliente/cliente-detail-transaccion-cliente.component';
import { ClienteTransaccionClienteComponent} from './cliente-transaccion-cliente/cliente-transaccion-cliente.component';
import {ClienteTransaccionClienteEditComponent} from './cliente-transaccion-cliente-edit/cliente-transaccion-cliente-edit.component';
import {ProductosTransaccionClienteListComponent} from'./productos-transaccion-cliente-list/productos-transaccion-cliente-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    TransaccionClienteModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteEditComponent, 
    ClienteTransaccionClienteComponent,ClienteAddTransaccionClienteComponent,ClienteDetailTransaccionClienteComponent,ClienteTransaccionClienteEditComponent
  ,ProductosTransaccionClienteListComponent],
  providers : [ClienteService]

})
export class ClienteModule { }
