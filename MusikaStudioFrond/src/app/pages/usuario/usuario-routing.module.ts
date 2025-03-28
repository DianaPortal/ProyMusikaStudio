import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { InstrumentosComponent } from "./instrumentos/instrumentos.component";
import { AudioComponent } from "./audio/audio.component";
import { NotFoundComponent } from "src/shared/not-found/not-found.component";
import { UsuarioComponent } from "./usuario.component";
import { DetalleInstrumentoComponent } from "./detalle-instrumento/detalle-instrumento.component";
import { CarritoComponent } from "./carrito/carrito.component";


const route: Routes = [
  { path:'', component:UsuarioComponent, children:[
      { path:'', component:LandingComponent },
      { path:'audio', component:AudioComponent },
      { path:'instrumento/:tipo', component:InstrumentosComponent },
      { path:'det-instrumento/:tipo', component:DetalleInstrumentoComponent },
      { path: 'carrito', component:CarritoComponent },
      { path:'**', redirectTo:'../NotFound' }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class UsuarioRoutingModule {}
