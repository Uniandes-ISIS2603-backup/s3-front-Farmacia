import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura} from './factura';
import { FacturaDetail } from './factura-detail';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const facturas = 'facturas.json';


@Injectable()
export class FacturaService {
    constructor(private http: HttpClient) { }

    getFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(API_URL + facturas);
    }

    getFacturaDetail(facturaId): Observable<FacturaDetail> {
        return this.http.get<FacturaDetail>(API_URL + facturas + '/' + facturaId);
    }
}

