export class TransaccionProveedor {

    id: number;
    monto: number;
    tiempo: string;
    proveedor: {
        id: number;
        nombre: string;
    };
}
