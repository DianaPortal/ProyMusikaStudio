import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Instrumento } from '../interfaces/instrumento';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  private api:string = `${environment.endpoint}/instrumento`

  constructor(private http:HttpClient) { }

  listarInstrumentos():Observable<Instrumento[]>{
    return this.http.get<Instrumento[]>(`${this.api}/listar`);
  }

  buscarInstrumento(id:number):Observable<Instrumento>{
    return this.http.get<Instrumento>(`${this.api}/buscar/${id}`);
  }

  guardarInstrumento(instrumento:Instrumento):Observable<string>{
    return this.http.post<string>(`${this.api}/guardar`, instrumento);
  }

  eliminarInstrumento(id:number):Observable<string>{
    return this.http.delete<string>(`${this.api}/eliminar/${id}`);
  }

}
