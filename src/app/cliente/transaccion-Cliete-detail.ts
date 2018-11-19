import {TransaccionCliente} from './transaccion-cliente';
import { Producto } from '../producto/producto';

export class TransaccionClienteDetail extends TransaccionCliente {

    productos: Producto[];
}