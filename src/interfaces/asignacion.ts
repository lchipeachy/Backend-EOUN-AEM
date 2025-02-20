import { cursocicloescolar } from "./curso_ciclo_escolar";

export interface asignacion {
    codigoAsignacion: number,
    codigoAlumno: number,
    codigoProfesor: number;
    promedio: number;

    codigoCursoCicloEscolar: number,
    cursocicloescolar?: cursocicloescolar;
}