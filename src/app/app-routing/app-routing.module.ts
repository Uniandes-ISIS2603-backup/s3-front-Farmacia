import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';

import { ProveedorListComponent } from '../proveedor/proveedor-list/proveedor-list.component';
import { ProductoListComponent } from '../producto/producto-list/producto-list.component';
import { ProveedorDetailComponent } from '../proveedor/proveedor-detail/proveedor-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { TransaccionClienteListComponent } from '../transaccion-cliente/transaccion-cliente-list/transaccion-cliente-list.component';
import { TransaccionClienteDetailComponent } from '../transaccion-cliente/transaccion-cliente-detail/transaccion-cliente-detail.component';
import { ProductoDetailComponent } from '../producto/producto-detail/producto-detail.component';
import { ProveedorCreateComponent } from '../proveedor/proveedor-create/proveedor-create.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import {TransaccionProveedorDetailComponent} from '../proveedor/transaccion-proveedor-detail/transaccion-proveedor-detail.component';
import {AuthSingUpComponent} from '../auth/auth-sing-up/auth-sing-up.component';
import { ClienteDetailTransaccionClienteComponent } from '../cliente/cliente-detail-transaccion-cliente/cliente-detail-transaccion-cliente.component';
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
                path:':idProveedor/transaccion-proveedor/:idTransaccionProveedor',
                component: TransaccionProveedorDetailComponent

            },
            {
                path: 'add',
                component: ProveedorCreateComponent,
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
                path:':idCliente/transacciones/:idTransaccion',
                component: ProductoListComponent

            },
            {
                path: ':idCliente/transaccionesCliente/:idTransaccion',
                component: ClienteDetailTransaccionClienteComponent

            }
            ,
            {
                path: ':id',
                component: ClienteDetailComponent
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                runGuardsAndResolvers: 'always'
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
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'crear',
                component: ClienteCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
        ]
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
