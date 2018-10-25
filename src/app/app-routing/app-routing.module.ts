import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';
import {ProductoListComponent} from '../producto/producto-list/producto-list.component';

const routes: Routes = [
    {
        path: 'proveedores',
        children: [
            {
                path: 'list',
                component: ProveedorListComponent
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
