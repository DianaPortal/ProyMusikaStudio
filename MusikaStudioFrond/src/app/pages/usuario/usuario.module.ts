import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AudioComponent } from './audio/audio.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { UsuarioComponent } from './usuario.component';
import { RouterModule } from '@angular/router';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardInstrumentoComponent } from './components/card-instrumento/card-instrumento.component';
import { DetalleInstrumentoComponent } from './detalle-instrumento/detalle-instrumento.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarritoComponent } from './carrito/carrito.component';
import { CardCarritoComponent } from './components/card-carrito/card-carrito.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalRegistrarVentaComponent } from './components/modal-registrar-venta/modal-registrar-venta.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    LandingComponent,
    AudioComponent,
    InstrumentosComponent,
    UsuarioComponent,
    CarruselComponent,
    CardInstrumentoComponent,
    DetalleInstrumentoComponent,
    CarritoComponent,
    CardCarritoComponent,
    ModalRegistrarVentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatOptionModule,
  ]
})
export class UsuarioModule { }
