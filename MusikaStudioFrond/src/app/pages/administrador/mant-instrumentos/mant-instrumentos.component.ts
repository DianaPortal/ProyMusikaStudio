import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { CrearInstrumentoComponent } from './crear-instrumento/crear-instrumento.component';
import { MatTableDataSource } from '@angular/material/table';
import { EditarInstrumentoComponent } from './editar-instrumento/editar-instrumento.component';

@Component({
  selector: 'app-mant-instrumentos',
  templateUrl: './mant-instrumentos.component.html',
  styleUrls: ['./mant-instrumentos.component.css']
})
export class MantInstrumentosComponent implements OnInit {

  campoBuscar: string = '';

  public instrumento: Instrumento[] = [];
  public instrumentoFiltrado : Instrumento[] = [];

  constructor(
    private _instrumentoService: InstrumentoService,
    private _dialog: MatDialog,

   ) {}

  ngOnInit(): void {
    this.listarInstrumento();
  }

   listarInstrumento(){
    this._instrumentoService.listarInstrumentos().subscribe(data => {
      this.instrumento = data
    })
   }

   buscarInstrumento(nombreInstrumento: string){
    this.instrumentoFiltrado = this.instrumento.filter(x => x.nombre.toLowerCase().includes(nombreInstrumento.toLowerCase()));
   }

   openDialog() {
     const dialogRef = this._dialog.open(CrearInstrumentoComponent);

     dialogRef.afterClosed().subscribe(result => {
     });
   }

   abrirDialogo(id: number): void {
    const dialogRef = this._dialog.open(EditarInstrumentoComponent, {
      data: { idInstrumento: id } // Pasar el id al componente
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  eliminarRegistro(id:number){
    this._instrumentoService.eliminarInstrumento(id).subscribe(data => {
    })
    location.reload()
  }

}
