import { Rol } from "./rol";
import { TipoDocumento } from "./tipoDocumento";

export interface Usuario{

  id?:number;
  nombre?:string;
  apellido?:string;
  telefono?:string;
  fechaRegistro?:string;
  direccion?:string;
  correo?:string;
  password?:string;
  nDocumento?:string;
  rol?: Rol
  tipoDocumento?: TipoDocumento

}
