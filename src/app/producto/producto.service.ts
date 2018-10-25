import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from './producto';


const API_URL = '../../assets/';
const proveedores = 'proveedores.json';


@Injectable()
export class ProductoService {

    constructor(private http: HttpClient) { }

    getProductos() : Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + proveedores);
    }
}
