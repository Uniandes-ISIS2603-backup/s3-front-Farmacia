import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Proveedor } from './proveedor';
import { environment } from '../../environments/environment';
import { ProveedorDetail } from './proveedor-detail';
/**
* Ruta que maneja la conexion con el back.
*/
const API_URL = environment.apiURL;
const proveedores = '/proveedores';

/**
* El servicio que maneja todas las peticiones referentes a los proveedores
*/
@Injectable()
export class ProveedorService {

    /**
    * Constructor del servicio.
    * @param http The HttpClient 
    */
    constructor(private http: HttpClient) { }
    /**
     * Returns the Observable object containing the list of providers retrieved from the API
     * @returns The list of providers in real time
     */
    getProveedores(): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(API_URL + proveedores);
    }
    /**
    * Returns the Observable object with the details of an provider retrieved from the API
    * @returns The provider details
    */
    getProveedorDetail(proveedorId): Observable<ProveedorDetail> {
        return this.http.get<ProveedorDetail>(API_URL + proveedores + '/' + proveedorId);
    }
    /**
    * Creates an provider
    * @param proveedor The new provider
    * @returns The confirmation that the provider was created
    */
    createProveedor(proveedor): Observable<Proveedor> {
        return this.http.post<Proveedor>(API_URL + proveedores, proveedor);
    }
}
