import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransaccionCliente } from './transaccion-cliente';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const transaccionesCliente = 'transaccionesCliente.json';


@Injectable()
export class TransaccionClienteService {
    constructor(private http: HttpClient) { }

    getTransaccionesCliente() : Observable<TransaccionCliente[]> {
        return this.http.get<TransaccionCliente[]>(API_URL + transaccionesCliente);
    }
}