import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Instrumento } from 'src/app/interfaces/instrumento';

@Component({
  selector: 'app-card-instrumento',
  templateUrl: './card-instrumento.component.html',
  styleUrls: ['./card-instrumento.component.css']
})
export class CardInstrumentoComponent {

  @Input() public rutaRelativa:string = '';
  @Input() public tituloSeccion:string = '';
  @Input() public listaProductosMasVendidos:Instrumento[] = [];

  items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Lista de 100 elementos
  paginatedItems: string[] = []; // Lista actual para mostrar en la página

  pageSize = 10; // Tamaño de página inicial
  currentPage = 0; // Página actual
  totalItems = this.listaProductosMasVendidos.length // Total de ítems


  @ViewChild(MatPaginator) paginator!: MatPaginator

  onPageChange(event: any) {
    console.log('Página actual:', event.pageIndex + 1);
    console.log('Tamaño de página:', event.pageSize);
  }

}
