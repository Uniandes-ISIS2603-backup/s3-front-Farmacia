import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroListComponent } from './registro-list/registro-list.component';
import { RegistroService } from './registro.service';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [RegistroListComponent],
  providers : [RegistroService],
  exports: [RegistroListComponent]
})
export class RegistroModule { }
