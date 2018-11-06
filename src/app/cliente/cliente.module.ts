import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { TransaccionClienteModule } from '../transaccion-cliente/transaccion-cliente.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    TransaccionClienteModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent],
  providers : [ClienteService]

})
export class ClienteModule { }
