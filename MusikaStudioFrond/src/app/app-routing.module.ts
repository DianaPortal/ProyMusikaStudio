import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/shared/not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule)},
  {path:'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path:'administrador', loadChildren: () => import('./pages/administrador/administrador.module').then(m => m.AdministradorModule)},
  {path:'**', redirectTo:'NotFound'},
  {path:'NotFound', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
