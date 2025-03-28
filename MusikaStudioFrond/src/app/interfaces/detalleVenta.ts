import { Instrumento } from "./instrumento";

export interface DetalleVenta{
  idDetalleVenta:number,
  cantidad:number,
  subTotal:number,
  instrumento?:Instrumento,
}
