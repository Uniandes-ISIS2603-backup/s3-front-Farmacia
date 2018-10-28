import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Proveedor } from './proveedor';
import { environment } from '../../environments/environment';
import { ProveedorDetail } from './proveedor-detail';

const API_URL = environment.apiURL;
const proveedores = '/proveedores';


@Injectable()
export class ProveedorService {

    constructor(private http: HttpClient) { }

    getProveedores() : Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(API_URL + proveedores);
    }

    getProveedorDetail(proveedorId): Observable<ProveedorDetail> {
        return this.http.get<ProveedorDetail>(API_URL + proveedores + '/' + proveedorId);
    }
}