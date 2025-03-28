import { Component, Input, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
import { Venta } from '../../../../interfaces/venta';

@Component({
  selector: 'app-card-carrito',
  templateUrl: './card-carrito.component.html',
  styleUrls: ['./card-carrito.component.css']
})
export class CardCarritoComponent {
;
  @Input() public idUsuario:number = 0
  public loading:boolean = true;

  @Input() public venta!: Venta;

  constructor(private _ventaService: VentaService,
  ){}

  eliminar(idDetalleVenta:number): void{
    this._ventaService.eliminarDelCarrito(this.idUsuario, idDetalleVenta).subscribe({
      next: (next) => {
        location.reload()
      },
      error: (error) => {console.log("no se pudo eliminar");
      }
    })
  }

}
