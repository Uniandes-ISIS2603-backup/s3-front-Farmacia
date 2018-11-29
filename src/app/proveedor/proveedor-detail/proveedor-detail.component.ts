import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute } from '@angular/router';
import { ProveedorDetail } from '../proveedor-detail';
import { TransaccionProveedorListComponent } from '../transaccion-proveedor-list/transaccion-proveedor-list.component';
import { TransaccionProveedorCreateComponent } from '../transaccion-proveedor-create/transaccion-proveedor-create.component';
import { MatDialog } from '@angular/material';
import { TransaccionProveedorService } from 'src/app/transaccion-proveedor/transaccion-proveedor.service';
/**
* Representa el componente detalle de un proveedor
*/
@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {

    /**
    * El proveedor detallado
    */
  @Input() proveedorDetail: ProveedorDetail;

  showAsociate : boolean;

  showCreate: boolean;


    /**
    * Constructor for the detailproveedor component
    * @param route The route which helps to retrieves the id of the provider to be shown
    * @param authorService The provider's services supplier
    */
  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

 /**
     * The child BookReviewListComponent
     */
    @ViewChild(TransaccionProveedorListComponent) componenteTransaccionProveedorList: TransaccionProveedorListComponent;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(TransaccionProveedorCreateComponent) componenteTransaccionProveedorCreate: TransaccionProveedorCreateComponent;
    

    /**
    * El id del proveedor.
    */
  proveedor_id: number;
  
    /**
    * The method which obtains the provider whose details we want to show
    */
  getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
      .subscribe(proveedorDetail => {
        this.proveedorDetail = proveedorDetail;
      });
  }

  asociateProducto(productoId) : void {
    this.proveedorService.asociateProducto(this.proveedor_id, productoId);
  }

  showHideAsociate() : void {
    this.showAsociate = !this.showAsociate;
    if(!this.showAsociate)
    {
      this.ngOnInit();
    }
  }
    /**
    * The method which initializes the component.
    * We need to create the provider so it is never considered as undefined
    */
  ngOnInit() {
    // el mas convierte el id de string a number
    this.proveedor_id = +this.route.snapshot.paramMap.get('id');
    if (this.proveedor_id) {
      this.proveedorDetail = new ProveedorDetail();
      this.getProveedorDetail();
      
    }
    this.showAsociate = false;
    this.showCreate = false;
  }

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  createTransaccionProveedor(): void {
    const dialogRef = this.dialog.open(TransaccionProveedorCreateComponent, {
      width: '80%',
      data: this.proveedorDetail
    });
  }

}
