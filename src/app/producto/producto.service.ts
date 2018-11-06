import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from './producto';

import { environment } from '../../environments/environment';
import { ProductoDetail } from './producto-detail';
import { Registro } from '../registro/registro';


const API_URL = environment.apiURL;
const producto = '/productos';
const registro = '/registros';


@Injectable()
export class ProductoService {

    constructor(private http: HttpClient) { }

    getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + producto);
    }

    getProductoDetail(productoId): Observable<ProductoDetail> {
        return this.http.get<ProductoDetail>(API_URL + producto + '/' + productoId);
    }

    createProducto(product): Observable<Producto> {
        let idRegistro: any;
        this.http.post<Registro>(API_URL + registro, null)
            .subscribe(registroRespuesta => idRegistro = registroRespuesta.id);
        return this.http.post<Producto>(API_URL + producto + '/registro/' + idRegistro, product);
    }
}
