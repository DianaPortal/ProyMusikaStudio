import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private api:string = `${environment.endpoint}/usuario`

  constructor(private http:HttpClient) { }

  listarUsuario():Observable<Array<Usuario>>{
  return this.http.get<Array<Usuario>>(`${this.api}/listar`);
  }

  buscarUsuario(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.api}/buscar/${id}`);
  }

  crearUsuario(usuario:Usuario):Observable<string>{
    return this.http.post<string>(`${this.api}/crear`, usuario);
  }

  eliminarUsuario(id:number):Observable<string>{
    return this.http.delete<string>(`${this.api}/eliminar/${id}`);
  }

}
