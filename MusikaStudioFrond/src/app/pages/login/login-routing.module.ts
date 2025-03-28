import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IniciarSesionComponent } from "./iniciar-sesion/iniciar-sesion.component";
import { RegistrarseComponent } from "./registrarse/registrarse.component";
import { NotFoundComponent } from "src/shared/not-found/not-found.component";

const route: Routes = [
  {path:'', component:IniciarSesionComponent, pathMatch:'full'},
  {path:'registrarse', component:RegistrarseComponent},
  { path:'**', redirectTo:'../NotFound' },
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class LoginRouting {}
