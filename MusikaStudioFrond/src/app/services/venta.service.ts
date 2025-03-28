import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Venta } from '../interfaces/venta';
import { DetalleVentaDTO } from '../interfaces/detalleVentaDTO';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private api:string = `${environment.endpoint}/ventas`

  constructor(private http:HttpClient) { }

  obtenerResumenCarrito(idUsuario:number):Observable<Venta>{
    return this.http.get<Venta>(`${this.api}/${idUsuario}/carrito`)
  }

  agregarAlCarrito(idUsuario:number, detalleVenta:DetalleVentaDTO):Observable<Venta>{
    return this.http.post<Venta>(`${this.api}/${idUsuario}/carrito`, detalleVenta);
  }

  confirmarVenta(idUsuario:number, idMetodoPago:number):Observable<Venta>{
    return this.http.put<Venta>(`${this.api}/${idUsuario}/confirmar/${idMetodoPago}`, null);
  }

  eliminarDelCarrito(usuarioId:number, metodoPagoId:number):Observable<Venta>{
    return this.http.delete<Venta>(`${this.api}/${usuarioId}/carrito/${metodoPagoId}`);
  }

}
