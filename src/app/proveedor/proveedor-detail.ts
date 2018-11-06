import {Proveedor} from './proveedor';
import { TransaccionProveedor } from '../transaccion-proveedor/transaccion-proveedor';

export class ProveedorDetail extends Proveedor {

    transaccionesProveedor: TransaccionProveedor[];

}
