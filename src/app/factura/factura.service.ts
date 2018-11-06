import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura} from './factura';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const facturas = 'facturas.json';


@Injectable()
export class FacturaService {
    constructor(private http: HttpClient) { }

    getFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(API_URL + facturas);
    }
}
