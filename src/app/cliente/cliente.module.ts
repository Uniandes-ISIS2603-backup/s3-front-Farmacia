import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { TransaccionClienteModule } from '../transaccion-cliente/transaccion-cliente.module';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteEditComponent} from './cliente-edit/cliente-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    CommonModule,
    FormsModule,
    TransaccionClienteModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteEditComponent],
  providers : [ClienteService]

})
export class ClienteModule { }
