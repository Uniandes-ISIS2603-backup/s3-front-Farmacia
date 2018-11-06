import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';
import {ProductoListComponent} from '../producto/producto-list/producto-list.component';
import {TransaccionProveedorListComponent} from '../transaccion-proveedor/transaccion-proveedor-list/transaccion-proveedor-list.component';

import {ProveedorDetailComponent} from '../proveedor/proveedor-detail/proveedor-detail.component';
// tslint:disable-next-line:max-line-length
import { TransaccionProveedorDetailComponent } from '../transaccion-proveedor/transaccion-proveedor-detail/transaccion-proveedor-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { RegistroListComponent } from '../registro/registro-list/registro-list.component';
import {TransaccionClienteListComponent} from '../transaccion-cliente/transaccion-cliente-list/transaccion-cliente-list.component';
import { TransaccionClienteDetailComponent } from '../transaccion-cliente/transaccion-cliente-detail/transaccion-cliente-detail.component';
import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import { FacturaDetailComponent } from '../factura/factura-detail/factura-detail.component';
import { ProductoDetailComponent } from '../producto/producto-detail/producto-detail.component';
import { ProveedorCreateComponent } from '../proveedor/proveedor-create/proveedor-create.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';

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
            },
            {
                path : 'add',
                component : ProveedorCreateComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'productos',
        children: [
            {
                path: 'list',
                component: ProductoListComponent
            },
            {
                path: ':id',
                component: ProductoDetailComponent
            }
        ]
    },
    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: ':id',
                component: ClienteDetailComponent
            }
        ]
    },
    {
        path: 'registros',
        children: [
            {
                path: 'list',
                component: RegistroListComponent
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
    },
    {
        path: 'transacciones-cliente',
        children: [
         {
            path: 'list',
            component: TransaccionClienteListComponent
        },
        {
            path: ':id',
            component: TransaccionClienteDetailComponent
        }
    ]},
    {
        path: 'facturas',
        children: [
         {
            path: 'list',
            component: FacturaListComponent
        },
        {
            path: ':id',
            component: FacturaDetailComponent
        }
    ]}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
