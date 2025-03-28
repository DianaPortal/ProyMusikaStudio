import { Categoria } from "./categoria"
import { Marca } from "./marca"

export interface Instrumento{
  idInstrumento?:number,
  nombre:string,
  imagen:string,
  descripcion:string,
  precio:number,
  stock:number,
  activo:boolean,
  fechaIngreso:string,
  categoria?:Categoria,
  marca?:Marca,
}
