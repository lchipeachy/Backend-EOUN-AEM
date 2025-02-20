import { rol } from "./rol";

export interface profesor {
    codigoProfesor: number;
    DPI: string;
    Nombres: string;
    Apellidos: string;
    Especialidad: string;
    Telefono: string;
    Celular: string;
    Direccion: string;

    codigoRol: number;
    rol?: rol;
}