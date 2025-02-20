import { grado } from "./grado";

export interface curso {
    codigoCurso: number;
    Descripcion: string;

    codigoGrado: number;
    grado?: grado;
}