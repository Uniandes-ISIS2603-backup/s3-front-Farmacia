import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from './producto';

import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;
const producto = '/productos';


@Injectable()
export class ProductoService {

    constructor(private http: HttpClient) { }

    getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + producto);
    }

    getProductoDetail(productoId): Observable<Producto> {
        return this.http.get<Producto>(API_URL + producto + '/' + productoId);
    }
}
