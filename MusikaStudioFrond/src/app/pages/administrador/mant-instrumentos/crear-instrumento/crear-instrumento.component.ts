import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';
import { Marca } from 'src/app/interfaces/marca';
import { CategoriaService } from 'src/app/services/categoria.service';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { MarcaService } from 'src/app/services/marca.service';


import {map, startWith} from 'rxjs/operators';
import { Instrumento } from 'src/app/interfaces/instrumento';

@Component({
  selector: 'app-crear-instrumento',
  templateUrl: './crear-instrumento.component.html',
  styleUrls: ['./crear-instrumento.component.css']
})
export class CrearInstrumentoComponent implements OnInit {

  public listadoCategorias: Categoria[] =[];
  public listadoMarcas: Marca[] = [];

  categoriasFiltradas$!: Observable<{ idCategoria: number; nombre: string}[]>;
  categoriaControl = new FormControl('');

  rolesFiltrados$!: Observable<{ idMarca: number; nombre: string}[]>;
  rolControl = new FormControl('');



  public formularioRegistrar = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imagen: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    precio: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)])
  })

  constructor(
    private _categoriaServices: CategoriaService,
    private _marcaServices: MarcaService,
    private _instrumentoServices: InstrumentoService,
  ){}

  ngOnInit(): void {

    this.listarCategorias();
    this.listarMarcas();


    this.categoriasFiltradas$ = this.categoriaControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCategoria(value || ''))
    );
    this.rolesFiltrados$ = this.rolControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterRol(value || ''))
    );

  }

  private _filterCategoria(value: string): { idCategoria: number; nombre: string }[] {
    const filterValue = value.toLowerCase();
    return this.listadoCategorias.filter(option =>
      option.nombre.toLowerCase().includes(filterValue)
    );
  }

  private _filterRol(value: string): { idMarca: number; nombre: string }[] {
    const filterValue = value.toLowerCase();
    return this.listadoMarcas.filter(option =>
      option.nombre.toLowerCase().includes(filterValue)
    );
  }

  listarCategorias(){
    this._categoriaServices.listarCategorias().subscribe(data => {
      this.listadoCategorias = data
    })
  }

  listarMarcas(){
    this._marcaServices.listarMarca().subscribe(data => this.listadoMarcas = data)
  }

  onSubmit(){

    if(this.formularioRegistrar.invalid){
      alert("formulario no enviado");
      return;
    }

    const instrumento: Instrumento = {
      nombre: this.formularioRegistrar.get('nombre')?.value as string,
      imagen: this.formularioRegistrar.get('imagen')?.value as string,
      descripcion: this.formularioRegistrar.get('descripcion')?.value as string,
      precio: Number.parseInt(this.formularioRegistrar.get('precio')?.value as string) ,
      stock: 0,
      activo: true,
      fechaIngreso: new Date().toISOString(),
      categoria: {
        idCategoria: this.buscarIdCategoria(this.categoriaControl.value as string),
        nombre: ''
      },
      marca: {
        idMarca: this.buscarIdMarca(this.rolControl.value as string),
        nombre: ''
      }
    }
    this._instrumentoServices.guardarInstrumento(instrumento).subscribe(data => { })

    location.reload()
  }

  buscarIdCategoria(valor: string):number{
    let categoria;
    categoria = this.listadoCategorias.find(x => x.nombre == valor)
    return categoria?.idCategoria ? categoria?.idCategoria : 1
  }

  buscarIdMarca(valor: string):number{
    let categoria;
    categoria = this.listadoMarcas.find(x => x.nombre == valor)
    return categoria?.idMarca ? categoria?.idMarca : 1
  }

}
