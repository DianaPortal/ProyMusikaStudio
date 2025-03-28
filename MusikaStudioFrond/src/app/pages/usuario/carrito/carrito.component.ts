import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Venta } from 'src/app/interfaces/venta';
import { VentaService } from 'src/app/services/venta.service';
import { ModalRegistrarVentaComponent } from '../components/modal-registrar-venta/modal-registrar-venta.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  public idUsuario:number = 0
  public loading:boolean = true;

  public venta!: Venta;
  public carritoVacio: boolean = true;

  constructor(
    private _ventaService: VentaService,
    private _router: Router,
    private _dialog: MatDialog,
  ){}

  ngOnInit() {
    const usuario = localStorage.getItem("usuario");
    if(!usuario) return
    const asd = JSON.parse(usuario)
    this.idUsuario = asd.idUsuario

    this._ventaService.obtenerResumenCarrito(this.idUsuario).subscribe(data => {
      this.venta = data;
      this.loading = false
      if(this.venta.detallesVenta?.length === 0){
        this.carritoVacio = true
        return
      }
      else{
        this.carritoVacio = false
      }
    })


  }

  continuarConLaCompra(){
    const dialogRef = this._dialog.open(ModalRegistrarVentaComponent);
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        location.reload()
      }, 2000);
    });
  }

}
