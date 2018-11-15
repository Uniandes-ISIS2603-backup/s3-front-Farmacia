import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransaccionProveedor } from '../proveedor/transaccion-proveedor';
import { Proveedor } from './proveedor';
import { environment } from '../../environments/environment';
import { ProveedorDetail } from './proveedor-detail';
import {TransaccionProveedorDetail} from '../proveedor/transaccion-proveedor-detail';
/**
* Ruta que maneja la conexion con el back.
*/
const API_URL = environment.apiURL;
const transaccionesProveedor = '/transaccionProveedor'
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

   public getTransaccionesProveedor(idProveedor): Observable<TransaccionProveedor[]> {
        return this.http.get<TransaccionProveedor[]>(API_URL + proveedores + '/' + idProveedor + transaccionesProveedor);
    }

    /**
     * Obtiene el detail de la transaccion proveedor.
     * @param transaccionProveedorId
     */
    public getTransaccionProveedorDetail(transaccionProveedorId, idProveedor): Observable<TransaccionProveedorDetail> {
        return this.http.get<TransaccionProveedorDetail>(API_URL + proveedores + '/' + idProveedor + transaccionesProveedor + '/' + transaccionProveedorId);
    }

    /**
    * Crea una  transaccion
    * @param transaccionProveedor La transaccion que sera creada
    * @returns Confirmacion de la creacion de la transaccion
    */
   public createTransaccionProveedor(transaccionProveedor, idProveedor): Observable<TransaccionProveedorDetail> {
    return this.http.post<TransaccionProveedorDetail>(API_URL + proveedores + '/' + idProveedor + transaccionProveedor, transaccionProveedor);
   }
}
