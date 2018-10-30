import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';
import {ProductoListComponent} from '../producto/producto-list/producto-list.component'
import {TransaccionProveedorListComponent} from '../transaccion-proveedor/transaccion-proveedor-list/transaccion-proveedor-list.component';

import {ProveedorDetailComponent} from '../proveedor/proveedor-detail/proveedor-detail.component';
import { TransaccionProveedorDetailComponent } from '../transaccion-proveedor/transaccion-proveedor-detail/transaccion-proveedor-detail.component';

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
        ]
    },
    {
        path: 'productos',
        children: [
            {
                path: 'list',
                component: ProductoListComponent
            }
        ]
    },
    {
        path: 'transaccion-proveedor',
        children: [
        {
            path: 'list',
            component: TransaccionProveedorListComponent
        },
        {
            path: ':id',
            component: TransaccionProveedorDetailComponent
        }
    ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
