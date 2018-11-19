import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetail } from '../producto-detail';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) { }

  productoId: string;
  productoDetail: ProductoDetail;

  ngOnInit() {
    this.productoId = this.route.snapshot.paramMap.get('id');
    this.getProductById();
  }

  getProductById() {
    this.productoService.getProductoDetail(this.productoId).subscribe(
      productoDetail => {
        this.productoDetail = productoDetail;
        console.log(productoDetail.registros);
      });
  }

}
