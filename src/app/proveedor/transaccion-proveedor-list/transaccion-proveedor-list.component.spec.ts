import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import {TransaccionProveedorListComponent} from './transaccion-proveedor-list.component';
import {TransaccionProveedor} from '../transaccion-proveedor';
import {ProveedorService} from '../proveedor.service';

describe('TransaccionProveedorComponent', () => {
    let component: TransaccionProveedorListComponent;
    let fixture: ComponentFixture<TransaccionProveedorListComponent>;
    const transaccionesProveedor: TransaccionProveedor[] = require('../../../assets/transacciones-proveedor.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ProveedorService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TransaccionProveedorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of transaccionesProveedor', () => {
        component.transaccionesProveedor = transaccionesProveedor;
        expect(component.transaccionesProveedor.length).toEqual(transaccionesProveedor.length);
    });

    it('an transaccionesProveedor should be an transaccionProveedor (first and last)', () => {
        component.transaccionesProveedor = transaccionesProveedor;
        expect(component.transaccionesProveedor[0].id).toEqual(transaccionesProveedor[0].id);
        // tslint:disable-next-line:max-line-length
        expect(component.transaccionesProveedor[transaccionesProveedor.length - 1].id).toEqual(transaccionesProveedor[transaccionesProveedor.length - 1].id);
    });

});
