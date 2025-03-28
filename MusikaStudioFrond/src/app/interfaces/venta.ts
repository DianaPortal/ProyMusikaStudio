import { DetalleVenta } from "./detalleVenta";
import { MetodoPago } from "./metodoPago";
import { Usuario } from "./usuario";

export interface Venta{
  id:number,
  fechaVenta:string,
  precioTotal:number,
  confirmada:boolean,
  detallesVenta?:Array<DetalleVenta>,
  metodoPago:MetodoPago,
  usuario:Usuario,
}
