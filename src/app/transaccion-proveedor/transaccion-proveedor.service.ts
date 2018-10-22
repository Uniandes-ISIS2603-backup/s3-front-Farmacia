import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransaccionProveedor } from './transaccion-proveedor';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const transaccionesProveedor = 'transaccionesProveedor.json';


@Injectable()
export class TransaccionProveedorService {
    constructor(private http: HttpClient) { }

    getTransaccionesProveedor() : Observable<TransaccionProveedor[]> {
        return this.http.get<TransaccionProveedor[]>(API_URL + transaccionesProveedor);
    }
}