import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionProveedorListComponent } from './transaccion-proveedor-list/transaccion-proveedor-list.component';
import { TransaccionProveedorService } from './transaccion-proveedor.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TransaccionProveedorListComponent],
  providers : [TransaccionProveedorService],
  exports:[TransaccionProveedorListComponent]
  
 
})
export class TransaccionProveedorModule { }
