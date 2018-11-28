import {TransaccionCliente} from './transaccion-cliente';
import { Producto } from '../producto/producto';

export class TransaccionClienteDetail extends TransaccionCliente {

    /**
     * Los productos de la transaccion
     */
    productos: Producto[];
}