import {Cliente} from "./cliente";

export class TransaccionCliente
{
    /**
     * el id de la transaccionCliente
     */
    id:number;
    /**
     * El monto acumulado de la transaccion
     */
    monto:number;
    /**
     * El tiempo de la transaccion
     */
    tiempo:number;
    /**
     * si es parcial o no la transaccion
     */
    parcial:Boolean;
    /**
     * el tipo de pago de la transaccion
     */
    tipoDePago:string;
    /**
     * El cliente dueño de la transaccion
     */
    cliente: Cliente;
}