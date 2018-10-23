import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroListComponent } from './registro-list/registro-list.component';
import { RegistroService } from './registro.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RegistroListComponent],
  providers : [RegistroService],
  exports: [RegistroListComponent]
})
export class RegistroModule { }
