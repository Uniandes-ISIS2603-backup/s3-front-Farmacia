import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ProductoService } from 'src/app/producto/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  constructor(
    private proveedorService : ProveedorService,
    private productoService : ProductoService,
    private toastrService : ToastrService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
