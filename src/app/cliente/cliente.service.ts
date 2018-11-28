import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from './cliente';
import { environment } from '../../environments/environment';
import { ClienteDetail } from './cliente-detail';
import { TransaccionCliente } from './transaccion-cliente';
import{TransaccionClienteDetail} from './transaccion-Cliete-detail';
import {ProductoDetail} from '../producto/producto-detail';
import {ProductoService} from '../producto/producto.service'
import { variable } from '@angular/compiler/src/output/output_ast';
import { projectionDef } from '@angular/core/src/render3/instructions';
import {Router} from '@angular/router';
import { Producto } from '../producto/producto';

/**
 * Ruta que maneja la conexion con el back
 */
const API_URL = environment.apiURL;
const clientes = '/clientes';
const transacciones ='/transaccionesCliente';
const productos='/productos';

/**
 * El servicio que maneja todas las peticiones referentes a los clientes
 */
@Injectable()
export class ClienteService {

    /**
     * Contructor del servicio
     * @param http The httpClient
     */
    constructor(private http: HttpClient,
        private servicioProducto:ProductoService ,
        private router:Router
        ) { }
        private productoDetail: Observable<ProductoDetail>;
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
        return this.http.get<ClienteDetail>(API_URL + clientes + '/cedula/' + clienteCedula);
    }

    /**
     * Creates a cliente
     * @param cliente  the new cliente
     */
    createCliente(cliente): Observable<Cliente> {
        this.router.navigateByUrl('/productos/list');
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
    
    agregarProducto(clienteId,transaccionId,productoId): Observable<any>
    {
       console.log(API_URL+clientes+'/'+clienteId + transacciones+'/'+transaccionId+productos+'/'+productoId);
       return this.http.post<any>(API_URL+clientes+'/'+clienteId + transacciones+'/'+transaccionId+productos+'/'+productoId,productoId);
        
        
        
    }
    getUltimaTransaccion(clienteId): Observable<TransaccionCliente>
    {
        return this.http.get<TransaccionCliente>(API_URL+clientes+'/'+clienteId + transacciones+'/ultima');
    }
    getProductos(clienteId,transaccionId):Observable<Producto[]>
    {
       return this.http.get<Producto[]>(API_URL+clientes+'/'+clienteId + transacciones+'/'+transaccionId);
    }

    eliminarProducto(clienteId,transaccionId,productoId):Observable<any>
    {
        
        return this.http.delete<any>(API_URL+clientes+'/'+clienteId + transacciones+'/'+transaccionId+productos+'/'+productoId);
    }


    /**
     * Elimina un cliente por id
     * @param clienteId el id del cliente a eliminar
     */
    deleteCliente (clienteId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + clientes + '/' + clienteId+'/delete');
    }

}