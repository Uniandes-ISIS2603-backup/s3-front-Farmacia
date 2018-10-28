import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';

import {TransaccionProveedorListComponent} from '../transaccion-proveedor/transaccion-proveedor-list/transaccion-proveedor-list.component';

import {ProveedorDetailComponent} from '../proveedor/proveedor-detail/proveedor-detail.component';

const routes: Routes = [
    {
        path: 'proveedores',
        children: [
            {
                path: 'list',
                component: ProveedorListComponent
            },
            {
                path: ':id',
                component: ProveedorDetailComponent,
            }
        ],
    }
];

const routes2: Routes = [
    {
        path: 'transacciones-proveedor',
        children: [
            {
                path: 'list',
                component: TransaccionProveedorListComponent
            }
        ],
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        RouterModule.forRoot(routes2)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}