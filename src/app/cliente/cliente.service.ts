import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from './cliente';
import { environment } from '../../environments/environment';
import { ClienteDetail } from './cliente-detail';
import { TransaccionCliente } from './transaccion-cliente';
import{TransaccionClienteDetail} from './transaccion-Cliete-detail';

/**
 * Ruta que maneja la conexion con el back
 */
const API_URL = environment.apiURL;
const clientes = '/clientes';
const transacciones ='/transaccionesCliente';
const productos='/productos'

/**
 * El servicio que maneja todas las peticiones referentes a los clientes
 */
@Injectable()
export class ClienteService {

    /**
     * Contructor del servicio
     * @param http The httpClient
     */
    constructor(private http: HttpClient) { }

    /**
     * Return the observable Object containung the list of clientes retrieved from the API
     */
    getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }

    /**
     * Return the Observable object with the details of an provider retrieved from the API
     * @param clienteId  id del cliente a buscar
     */
    getClienteDetail(clienteId): Observable<ClienteDetail> {
        return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }

    /**
     * Return the Observable object with the details of an cliente retrieved from the API by Cedula
     * @param clienteCedula Cedula del cliente a retornar
     */
    getClienteDetailByCedula(clienteCedula): Observable<ClienteDetail>{
        return this.http.get<ClienteDetail>(API_URL + clientes + '/cedula' + clienteCedula);
    }

    /**
     * Creates a cliente
     * @param cliente  the new cliente
     */
    createCliente(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
    }

    /**
     * Edita la informacion de un cliente
     * @param cliente 
     */
    updateCliente(cliente): Observable<ClienteDetail>{
        return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
    }

    createTransaccion(clienteId,transaccion):Observable<TransaccionCliente>
    {
        return this.http.post<TransaccionCliente>(API_URL+clientes+'/'+clienteId+transacciones,transaccion);
    }
    getTransaccionCliente(clienteId,transaccion): Observable<TransaccionClienteDetail>
    {
        return this.http.get<TransaccionClienteDetail>(API_URL+clientes+'/'+clienteId+transacciones+'/'+transaccion);
    }
    agregarProducto(clienteId,transaccionId,productoId)
    {
        this.http.post(API_URL+clientes+'/'+clienteId+transacciones+'/'+transaccionId,productoId);
    }

    /**
     * Elimina un cliente por id
     * @param clienteId el id del cliente a eliminar
     */
    deleteCliente (clienteId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + clientes + '/' + clienteId);
    }

}