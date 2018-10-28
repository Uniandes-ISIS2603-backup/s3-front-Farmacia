import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaService } from './factura.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FacturaListComponent],
  providers : [FacturaService],
  exports:[FacturaListComponent]
  
 
})
export class FacturaModule { }
