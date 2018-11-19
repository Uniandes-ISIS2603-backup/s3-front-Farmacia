import {Cliente} from "./cliente";

export class TransaccionCliente
{
    id:number;
    monto:number;
    tiempo:number;
    parcial:Boolean;
    tipoDePago:string;
    clinete: Cliente;
}