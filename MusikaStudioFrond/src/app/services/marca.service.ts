import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Marca } from '../interfaces/marca';


@Injectable({
  providedIn: 'root'
})

export class MarcaService {

  private api:string = `${environment.endpoint}/marca`

  constructor( private http:HttpClient ) { }

  listarMarca():Observable<Array<Marca>>{
    return this.http.get<Array<Marca>>(`${this.api}/listar`);
  }

}
