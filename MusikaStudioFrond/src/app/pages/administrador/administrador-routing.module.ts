import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MantInstrumentosComponent } from "./mant-instrumentos/mant-instrumentos.component";
import { MantCategoriasComponent } from "./mant-categorias/mant-categorias.component";
import { MantUsuariosComponent } from "./mant-usuarios/mant-usuarios.component";
import { MantMarcasComponent } from "./mant-marcas/mant-marcas.component";
import { NotFoundComponent } from "src/shared/not-found/not-found.component";
import { AdministradorComponent } from "./administrador.component";
import { EditarInstrumentoComponent } from "./mant-instrumentos/editar-instrumento/editar-instrumento.component";

const route: Routes = [
  {path:'', component:AdministradorComponent, children: [
    {path:'', component:MantInstrumentosComponent ,pathMatch:'full'},
    {path:'instrumento/:id', component:EditarInstrumentoComponent, pathMatch:'full'},
    {path:'categoria', component:MantCategoriasComponent},
    {path:'usuario', component:MantUsuariosComponent},
    {path:'marca', component:MantMarcasComponent},
    { path:'**', redirectTo:'../NotFound' },
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class AdministradorRoutingModule {}
