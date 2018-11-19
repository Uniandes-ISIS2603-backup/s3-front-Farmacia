import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransaccionCliente } from './transaccion-cliente';
import { Observable } from 'rxjs';
import { TransaccionClienteDetail } from './transaccion-cliente-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const transaccionesCliente = 'transaccionesCliente.json';


@Injectable()
export class TransaccionClienteService {
    constructor(private http: HttpClient) { }

    getTransaccionesCliente(): Observable<TransaccionCliente[]> {
        return this.http.get<TransaccionCliente[]>(API_URL + transaccionesCliente);
    }
    getTransaccionClienteDetail(transaccionClienteId): Observable<TransaccionClienteDetail> {
        return this.http.get<TransaccionClienteDetail>(API_URL + transaccionesCliente + '/' + transaccionClienteId);
    }

    createTransaccionCliente(transaccionCliente): Observable<TransaccionClienteDetail> {
        return this.http.post<TransaccionClienteDetail>(API_URL + transaccionCliente, transaccionCliente);
        }
}
