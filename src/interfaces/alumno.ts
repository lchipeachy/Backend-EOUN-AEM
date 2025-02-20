import { municipio } from "./municipio";
import { encargado } from "./encargado";
import { seccion } from "./seccion";

export interface alumno {
    codigoAlumno: string,
    CodigoPersonal: string,
    Nombre: string;
    Apellido: string;
    FechaDeNacimiento: Date;
    Genero: string;
    codigoRol: number;
    Telefono: string;
    Celular: string;
    GradoId: string;
    
    codigoMunicipio: string,
    municipio?: municipio;

    codigoEncargado: number;
    encargado?: encargado;

    CodigoSeccion: number;
    seccion?: seccion;
}