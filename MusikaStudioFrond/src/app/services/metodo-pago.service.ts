import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { MetodoPago } from '../interfaces/metodoPago';

@Injectable({
  providedIn: 'root'
})

export class MetodoPagoService {

  private api:string = `${environment.endpoint}/metodoDePago`

  constructor( private http:HttpClient ) { }

  listarMetodoPago():Observable<Array<MetodoPago>>{
    return this.http.get<Array<MetodoPago>>(`${this.api}/listar`)
  }

}
