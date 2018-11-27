/**
* This class represents a user of the BookStore.
* It contains all the information relevant to the user.
*/
export class User {
    nombre: string;
    apellido: string;
    ciudad: string;
    direccionEnvio: string;
    /**
     * El usuario va a ser la cedula
     */
    cedula: number;
    password: number;

    /**
    * The user's role
    */
    role: string;
}
