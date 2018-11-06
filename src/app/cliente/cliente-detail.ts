import {Cliente} from './cliente';
import { TransaccionCliente } from '../transaccion-cliente/transaccion-cliente';

export class ClienteDetail extends Cliente {

    transaccionesCliente : TransaccionCliente[];
}