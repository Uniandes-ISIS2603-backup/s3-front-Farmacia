import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from './registro';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const registros = 'registros.json';


@Injectable()
export class RegistroService {
    constructor(private http: HttpClient) { }

    getRegistros(): Observable<Registro[]> {
        return this.http.get<Registro[]>(API_URL + registros);
    }
}
