import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransaccionProveedor } from './transaccion-proveedor';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {TransaccionProveedorDetail} from './transaccion-proveedor-detail';

// const API_URL = environment.apiURL;
// const transaccionesProveedor = '/transaccionesProveedor';

const API_URL = '../../assets';
const transaccionesProveedor = '/transaccionesProveedor.json';


@Injectable()
export class TransaccionProveedorService {
    constructor(private http: HttpClient) { }

    /**
     * Obtiene la lista de las transacciones proveedor.
     */
    getTransaccionesProveedor(): Observable<TransaccionProveedor[]> {
        return this.http.get<TransaccionProveedor[]>(API_URL + transaccionesProveedor);
    }

    /**
     * Obtiene el detail de la transaccion proveedor.
     * @param transaccionProveedorId
     */
    getTransaccionProveedorDetail(transaccionProveedorId): Observable<TransaccionProveedorDetail> {
        return this.http.get<TransaccionProveedorDetail>(API_URL + transaccionesProveedor + '/' + transaccionProveedorId);
    }

    /**
    * Crea una  transaccion
    * @param transaccionProveedor La transaccion que sera creada
    * @returns Confirmacion de la creacion de la transaccion
    */
   createTransaccionProveedor(transaccionProveedor): Observable<TransaccionProveedorDetail> {
    return this.http.post<TransaccionProveedorDetail>(API_URL + transaccionProveedor, transaccionProveedor);
    }
}
