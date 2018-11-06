import { Producto } from './producto';
import { Proveedor } from '../proveedor/proveedor';
import { Registro } from '../registro/registro';

export class ProductoDetail extends Producto {
    proveedor: Proveedor;
    registros: Registro[];

}
