import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { VentaService } from 'src/app/services/venta.service';
import { DetalleVentaDTO } from '../../../interfaces/detalleVentaDTO';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent {

  public rutaRelativa = 'det-instrumento';

  cantidad:number = 1;

  public idInstrumento:string = '';

  public instrumento:Instrumento = {
    idInstrumento: 0,
    nombre: "",
    imagen: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    activo: true,
    fechaIngreso: "",
    categoria: {
        idCategoria: 0,
        nombre: "",
        descripcion: ""
    },
    marca: {
        idMarca: 0,
        nombre: ""
    }
  };

  private detalleVenta:DetalleVentaDTO = {
    cantidad: 0,
    subTotal: 0,
    instrumentoId: 0
  };

  constructor(
    private route: ActivatedRoute,
    private _instrumentoService:InstrumentoService,
    private _ventaService:VentaService,
    private _snackBar: MatSnackBar,
    private _route: Router,
  ){}

  buscarInstrumentoPorId(id:number){
    this._instrumentoService.buscarInstrumento(id).subscribe({
      next: (value => {
        this.instrumento = value
        if(value.stock == 0) this.cantidad = 0
      })
    });
  }

  agregarAlCarrito(){
    if(this.instrumento.stock == 0) return
    const usuarioLS = localStorage.getItem("usuario");
    if(!usuarioLS){
      this._snackBar.open("Por favor, inicie sesion", '', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 3000,
      });
      setTimeout(() => {
        this._route.navigate(['../login'])
      }, 3000);
      return
    }

    this._snackBar.open("Producto agregado al carrito correctamente", '', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 2500,
    })

    const usuarioLogueado = JSON.parse(usuarioLS!);

    this.detalleVenta = {
      cantidad: this.cantidad,
      subTotal: this.calcularSubtotal(),
      instrumentoId: this.instrumento.idInstrumento ? this.instrumento.idInstrumento : 1
    };
    this._ventaService.agregarAlCarrito(usuarioLogueado.idUsuario, this.detalleVenta).subscribe({
      error: (err) => console.log(err),
    })
  }

  ngOnInit(){
    this.route.paramMap.subscribe(parametro => this.idInstrumento = parametro.get('tipo') || '');
    this.buscarInstrumentoPorId(Number(this.idInstrumento))
  }

  calcularSubtotal():number{
    return this.cantidad * this.instrumento.precio
  }

  aumentar(){
    if(this.cantidad == 0) return
    if(this.cantidad < 10) this.cantidad++
    console.log(this.cantidad);
  }

  disminuir(){
    if(this.cantidad == 0) return
    if(this.cantidad > 1) this.cantidad--
    console.log(this.cantidad);
  }





}
