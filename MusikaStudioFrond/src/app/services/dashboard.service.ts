import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private api:string = `${environment.endpoint}/ventas`

  constructor(private http:HttpClient) { }

  obtenerIngreso(fechaInicio:string, fechaFin:string):Observable<any>{
    return this.http.get<any>(`${this.api}/reportes/ingresos`)
  }

  obtenerVentasConfirmadas(fechaInicio:string, fechaFin:string):Observable<any>{
    return this.http.get<any>(`${this.api}/reportes/ventas-confirmadas`)
  }

  obtenerProductosVendidos(fechaInicio:string, fechaFin:string):Observable<any>{
    return this.http.get<any>(`${this.api}/reportes/productos-vendidos`)
  }

}
