import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Proveedor } from './proveedor';


const API_URL = "../../assets/";
const proveedores = 'proveedores.json';


@Injectable()
export class ProveedorService {

    constructor(private http: HttpClient) { }

    getProveedores() : Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(API_URL + proveedores);
    }
}