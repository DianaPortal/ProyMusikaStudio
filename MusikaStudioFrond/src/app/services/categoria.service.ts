import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})



export class CategoriaService {

  private api:string = `${environment.endpoint}/Categorias`;

  constructor(private http:HttpClient) { }

  listarCategorias():Observable<Array<Categoria>>{
    return this.http.get<Array<Categoria>>(`${this.api}/listarCategorias`);
  }

}
