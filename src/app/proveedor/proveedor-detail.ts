import { Proveedor } from './proveedor';
import { TransaccionProveedor } from './transaccion-proveedor';
import {Producto} from '../producto/producto';

export class ProveedorDetail extends Proveedor {
    /**
    * Las transacciones ejecutadas por un proveedor.
    */
    transaccionesProveedor: TransaccionProveedor[];
    /**
     * Los productos del proveedor.
     */
    productos : Producto[]; 

}
