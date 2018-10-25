import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  constructor(private facturaService : FacturaService) { }

  facturas : Factura[];

  getFacturas():void {
    this.facturaService.getFacturas().subscribe(facturas => this.facturas = facturas);
  }
  ngOnInit() {
    this.getFacturas();
  }

}

