import { rol } from "./rol";

export interface administrador {
    codigoAdminitrador: number;
    Usuario: string;
    Contrasena: string
    
    codigoRol: number;
    rol?: rol;
}