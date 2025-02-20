import { asignacion } from "./asignacion";

export interface unidad {
    codigoUnidad: number;
    Descripcion: string;
    Calificacion: number;

    codigoAsignacion: number;
    asignacion?: asignacion;
}