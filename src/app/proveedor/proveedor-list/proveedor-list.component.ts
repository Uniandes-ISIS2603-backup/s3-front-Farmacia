import { Component, OnInit ,Input } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  constructor(private proveedorService : ProveedorService) { }

  @Input() proveedores : Proveedor[];

  getProveedores():void {
    this.proveedorService.getProveedores().
      subscribe(proveedores => this.proveedores = proveedores);
  }
  ngOnInit() {
    this.getProveedores();
  }

}
