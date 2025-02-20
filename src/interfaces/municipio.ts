import { departamento } from "./departamento";

export interface municipio {
    codigoMunicipio: number;
    nombre: string;

    codigoDepartamento: number;
    departamento?: departamento
}