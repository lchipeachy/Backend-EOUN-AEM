import { grado } from "./grado";

export interface seccion {
    codigoSeccion: number;
    Descripcion: string;

    codigoGrado: number;
    grado?: grado;
}