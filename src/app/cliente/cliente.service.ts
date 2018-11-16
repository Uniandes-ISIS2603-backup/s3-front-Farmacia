import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from './cliente';
import { environment } from '../../environments/environment';
import { ClienteDetail } from './cliente-detail';
import { TransaccionCliente } from './transaccion-cliente';


const API_URL = environment.apiURL;
const clientes = '/clientes';
const transacciones ='/transaccionesCliente';


@Injectable()
export class ClienteService {

    constructor(private http: HttpClient) { }

    getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }

    getClienteDetail(clienteId): Observable<ClienteDetail> {
        return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }

    createCliente(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
    }

    updateCliente(cliente): Observable<ClienteDetail>{
        return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
    }

    createTransaccion(clienteId,transaccion):Observable<TransaccionCliente>
    {
        return this.http.post<TransaccionCliente>(API_URL+clientes+'/'+clienteId+transacciones,transaccion);
    }

}