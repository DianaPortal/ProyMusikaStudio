import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CrearInstrumentoComponent } from './mant-instrumentos/crear-instrumento/crear-instrumento.component';
import { EditarInstrumentoComponent } from './mant-instrumentos/editar-instrumento/editar-instrumento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MantInstrumentosComponent } from './mant-instrumentos/mant-instrumentos.component';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AdministradorComponent,
    CrearInstrumentoComponent,
    EditarInstrumentoComponent,
    MantInstrumentosComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,


    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
  ]
})

export class AdministradorModule { }
