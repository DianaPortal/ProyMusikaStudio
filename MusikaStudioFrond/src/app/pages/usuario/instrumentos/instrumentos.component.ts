import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InstrumentoService } from '../../../services/instrumento.service';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  public formularioBuscar = new FormGroup({
    nombre: new FormControl('', [Validators.required])
  });

  public rutaRelativa = '../../det-instrumento';
  public tituloSeccion:string = '';
  public listaOriginal:Instrumento[] = [];
  public instrumento:Instrumento[] = [];

  public tipo:string = '';

  constructor(private route: ActivatedRoute, private _instrumentosService:InstrumentoService){}

  listarInstrumentos(){
    this._instrumentosService.listarInstrumentos().subscribe(data => {
      this.instrumento = data.filter(x => x.categoria?.nombre.includes(this.tipo))
      this.listaOriginal = this.instrumento;
    });
  }

  ngOnInit(){
    this.route.paramMap.subscribe(parametro => {
      this.tipo = parametro.get('tipo') || ''
      this.listarInstrumentos()
    });
  }

  onSubmit(){
    let datoBuscado = this.formularioBuscar.get('nombre')?.value;
    const datosFiltrados = this.listaOriginal.filter(x => x.nombre.toLowerCase().includes(datoBuscado!.toLowerCase()))
    this.instrumento = datosFiltrados
  }

}
