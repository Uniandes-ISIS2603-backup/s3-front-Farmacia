import {Factura} from './factura';
import { TransaccionCliente } from '../transaccion-cliente/transaccion-cliente';

export class FacturaDetail extends Factura {

    transaccionesCliente : TransaccionCliente[];
}