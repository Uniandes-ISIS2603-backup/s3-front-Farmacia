import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionClienteListComponent } from './transaccion-cliente-list/transaccion-cliente-list.component';
import { TransaccionClienteService } from './transaccion-cliente.service';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { TransaccionClienteDetailComponent } from './transaccion-cliente-detail/transaccion-cliente-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [TransaccionClienteListComponent,TransaccionClienteDetailComponent],
  providers : [TransaccionClienteService],
  exports:[TransaccionClienteListComponent]
  
 
})
export class TransaccionClienteModule { }
