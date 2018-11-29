export class Producto {
    id: number;
    nombre: string;
    fecha: Date;
    precio: number;
    tipoProducto: TipoProducto;
    unidadesDisponibles: number;
    fotos: [string]|string[];
    videos: [string]|string[];
    perecedero: boolean;
    cantidad: number;

    static getTiposProducto(): string[] {
        return Object.keys(TipoProducto).map(key => TipoProducto[key]);
    }
}

export enum TipoProducto {
    Suministro = 'Suministro', Terminado = 'Terminado'
}

