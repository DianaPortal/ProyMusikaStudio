import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';
import { Marca } from 'src/app/interfaces/marca';
import { CategoriaService } from 'src/app/services/categoria.service';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { MarcaService } from 'src/app/services/marca.service';


import {map, startWith} from 'rxjs/operators';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-instrumento',
  templateUrl: './editar-instrumento.component.html',
  styleUrls: ['./editar-instrumento.component.css']
})
export class EditarInstrumentoComponent implements OnInit {

  public instrumentoEncontrado!: Instrumento;

  public listadoCategorias: Categoria[] =[];
  public listadoMarcas: Marca[] = [];

  categoriasFiltradas$!: Observable<{ idCategoria: number; nombre: string}[]>;
  categoriaControl = new FormControl('');

  rolesFiltrados$!: Observable<{ idMarca: number; nombre: string}[]>;
  rolControl = new FormControl('');



  public formularioRegistrar = new FormGroup({
    idInstrumento: new FormControl(0),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imagen: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    precio: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]),
    stock: new FormControl(0, [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]),
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { idInstrumento: number },
    private _categoriaServices: CategoriaService,
    private _marcaServices: MarcaService,
    private _instrumentoServices: InstrumentoService,
  ){
  }

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

    this.buscarInstrumentoPorId(this.data.idInstrumento)

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
      idInstrumento: Number.parseInt((this.formularioRegistrar.get('idInstrumento')?.value ?? '').toString()),
      nombre: this.formularioRegistrar.get('nombre')?.value as string,
      imagen: this.formularioRegistrar.get('imagen')?.value as string,
      descripcion: this.formularioRegistrar.get('descripcion')?.value as string,
      precio: Number.parseInt(this.formularioRegistrar.get('precio')?.value as string) ,
      stock: Number.parseInt((this.formularioRegistrar.get('stock')?.value ?? '').toString()),
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
    this._instrumentoServices.guardarInstrumento(instrumento).subscribe(data => {})
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

  buscarInstrumentoPorId(id: number): void {
    this._instrumentoServices.buscarInstrumento(id).subscribe(data => {
      this.instrumentoEncontrado = data;

      this.formularioRegistrar.patchValue({
        idInstrumento: data.idInstrumento,
        nombre: data.nombre,
        imagen: data.imagen,
        descripcion: data.descripcion,
        precio: data.precio.toString(),
        stock: data.stock
      });

      this.categoriaControl.setValue(data.categoria!.nombre);
      this.rolControl.setValue(data.marca!.nombre);
    });
  }

}
