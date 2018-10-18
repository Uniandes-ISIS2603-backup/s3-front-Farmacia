import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorService } from './proveedor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ProveedorListComponent],
  providers : [ProveedorService],
  exports:[ProveedorListComponent]
})
export class ProveedorModule { }
