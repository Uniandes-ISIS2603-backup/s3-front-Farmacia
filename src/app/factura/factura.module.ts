
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaService } from './factura.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [FacturaListComponent],
  providers : [FacturaService],
  exports: [FacturaListComponent]
})
export class FacturaModule { }
