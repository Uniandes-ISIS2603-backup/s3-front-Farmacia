import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';

import {ProveedorListComponent} from './proveedor-list.component';
import {Proveedor} from '../proveedor';
import {ProveedorService} from '../proveedor.service';

describe('ProveedorComponent', () => {
    let component: ProveedorListComponent;
    let fixture: ComponentFixture<ProveedorListComponent>;
    const proveedores: Proveedor[] = require('../../../assets/proveedores.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ProveedorService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProveedorListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of proveedores', () => {
        component.proveedores = proveedores;
        expect(component.proveedores.length).toEqual(proveedores.length);
    });

    it('an proveedores should be an proveedor (first and last)', () => {
        component.proveedores = proveedores;
        expect(component.proveedores[0].nombre).toEqual(proveedores[0].nombre);
        expect(component.proveedores[proveedores.length - 1].nombre).toEqual(proveedores[proveedores.length - 1].nombre);
    });

});