import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from './producto';

import { environment } from '../../environments/environment';
import { ProductoDetail } from './producto-detail';
import { Registro } from './registro';


const API_URL = environment.apiURL;
const producto = '/productos';
//Se cambio el nombre de la variable de registro a registros
const registros = '/registros';

@Injectable()
export class ProductoService {

    constructor(private http: HttpClient) { }

    getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(API_URL + producto);
    }

    getProductoDetail(productoId): Observable<ProductoDetail> {
        return this.http.get<ProductoDetail>(API_URL + producto + '/' + productoId);
    }

    async createProducto(register, product): Promise<Producto> {
        const idRegistro = await this.http.post<Registro>(API_URL + registros, register).toPromise()
            .then(registroRespuesta => registroRespuesta.id);
        return this.http.post<Producto>(API_URL + producto + '/registro/' + idRegistro, product).toPromise();
    }

    createRegistro(productoId, registro):Observable<Registro>
    {
        return this.http.post<Registro>(API_URL+producto+'/'+productoId+registros,registro);
    }
}
