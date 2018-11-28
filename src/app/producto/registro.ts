import {Producto} from "./producto";
export class Registro {
    /**
     * El id del registro
     */
    id: number;
    /**
     * La cantidad que representara el registro
     */
    cantidad: number;
    /**
     * El tipo de registro
     */
    tipoRegistro: string;
    /**
     * El producto dueno del registro
     */
    producto: Producto;
}
