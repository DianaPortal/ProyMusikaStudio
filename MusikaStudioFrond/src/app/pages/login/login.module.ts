import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginRouting } from './login-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarseComponent
  ],
  imports: [
    CommonModule,
    LoginRouting,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ]
})
export class LoginModule { }
