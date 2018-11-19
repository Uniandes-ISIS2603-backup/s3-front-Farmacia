export class Producto {
    id: number;
    nombre: string;
    fecha: Date;
    precio: number;
    tipoProducto: TipoProducto;
    unidadesDisponibles: number;
    fotos: [string];
    videos: [string];
    perecedero: boolean;
    cantidad: number;
}

export enum TipoProducto {
    Suministro, Terminado
}
