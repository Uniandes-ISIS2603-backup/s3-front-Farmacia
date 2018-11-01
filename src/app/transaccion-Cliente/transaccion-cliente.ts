export class TransaccionCliente{
    id:number;
    monto:number;
    tiempo:number;
    parcial:Boolean;
    tipoDePago:number;
    cliente:{   
        id : number;
        nombre : string;
        apellido : string;
        ciudad : string;
        direccionEnvio : string;
        cedula : number;}
}