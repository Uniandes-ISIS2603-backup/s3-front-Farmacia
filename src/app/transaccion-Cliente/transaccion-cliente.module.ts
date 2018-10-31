import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionClienteListComponent } from './transaccion-cliente-list/transaccion-cliente-list.component';
import { TransaccionClienteService } from './transaccion-cliente.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TransaccionClienteListComponent],
  providers : [TransaccionClienteService],
  exports:[TransaccionClienteListComponent]
  
 
})
export class TransaccionClienteModule { }
