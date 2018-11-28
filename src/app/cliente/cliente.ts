export class Cliente {
    /**
     * el id del cliente
     */
    id: number;
    /**
     * El nombre del cliente
     */
    nombre: string;
    /**
     * El apellido del cliente
     */
    apellido: string;
    /**
     * la ciudad del cliente
     */
    ciudad: string;
    /**
     * la direccion de envio del cliente
     */
    direccionEnvio: string;
    /**
     * la cedula del cliente (debe ser de 10 digitos y el primer numero no puede ser cero) 
     */
    cedula: number;
}
