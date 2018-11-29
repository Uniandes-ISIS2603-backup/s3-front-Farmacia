import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';


/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(
        private router: Router,
        private roleService: NgxRolesService,
        private permissionsService: NgxPermissionsService,
        
    ) { }


    /**
     * Metodo start del componente
     */
    start(): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_proveedor_permission',
            'create_proveedor_permission',
            'edit_cliente_permission',
            'create_transaccionCliente_permission']);
        const role = localStorage.getItem('role');
        const cedula = localStorage.getItem('cedula');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else {
            this.setClientRole(cedula);
        }
    }

    /**
     * Coloca el rol Guest a la sesion
     */
    setGuestRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    /**
     * Coloca el tol Client a la sesion
     * @param cedula 
     */
    setClientRole(cedula): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENT', ['create_transaccionCliente_permission']);
        localStorage.setItem('role', 'CLIENT');
        localStorage.setItem('cedula', cedula );
    }

    /**
     * Coloca la sesion administrado a la sesion
     */
    setAdministratorRole(): void {
        this.roleService.flushRoles();
        console.log("aqui");
        this.roleService.addRole('ADMIN', ['edit_proveedor_permission', 'create_proveedor_permission']);
        localStorage.setItem('role', 'ADMIN');
        this.router.navigateByUrl('/proveedores/list');


    }

    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login(cedula, role): void {
        
            if (role === 'Administrator') {
                
                this.setAdministratorRole();
            } else {
                
                this.setClientRole(cedula)
            }
    }

    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        localStorage.removeItem('cedula');
        this.router.navigateByUrl('/');
    }
}
