import {Cliente} from './cliente';
import { TransaccionCliente } from './transaccion-cliente';

export class ClienteDetail extends Cliente {

    /**
     * Las trasacciones del cliente
     */
    transaccionesCliente : TransaccionCliente[];
}