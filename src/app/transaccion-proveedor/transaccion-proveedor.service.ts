import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransaccionProveedor } from './transaccion-proveedor';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import{TransaccionProveedorDetail} from './transaccion-proveedor-detail';

//const API_URL = environment.apiURL;
//const transaccionesProveedor = '/transaccionesProveedor';

const API_URL = '../../assets';
const transaccionesProveedor = '/transaccionesProveedor.json';


@Injectable()
export class TransaccionProveedorService {
    constructor(private http: HttpClient) { }

    getTransaccionesProveedor() : Observable<TransaccionProveedor[]> {
        return this.http.get<TransaccionProveedor[]>(API_URL + transaccionesProveedor);
    }
    getTransaccionProveedorDetail(transaccionProveedorId): Observable<TransaccionProveedorDetail> {
        return this.http.get<TransaccionProveedorDetail>(API_URL + transaccionesProveedor + '/' + transaccionProveedorId);
    }
}