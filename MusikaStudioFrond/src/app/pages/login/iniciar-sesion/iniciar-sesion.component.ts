import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  public listadoUsuarios: Usuario[] = [];
  public contraseniaIncorrecta: boolean = false;

  public formularioInicioSesion = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', Validators.required)
  })

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router,
  ){}

  onSubmit(){
    this.iniciarSesion()
  }

  iniciarSesion(){

    this.contraseniaIncorrecta = false

    const correo = this.formularioInicioSesion.get('correo')?.value;
    const contrasenia = this.formularioInicioSesion.get('contrasenia')?.value;

    this._usuarioService.listarUsuario().subscribe(data => {
      this.listadoUsuarios = data;
      const usuarioFiltrado = this.listadoUsuarios.find(x => x.correo == correo && x.password == contrasenia);
      if(usuarioFiltrado) {
        localStorage.setItem("usuario", JSON.stringify(usuarioFiltrado))
        if(usuarioFiltrado.rol?.idRol == 2){
          this.router.navigate(['./administrador'])
        }
        else{
          this.router.navigate(['./home'])
        }
        return
      }
      this.contraseniaIncorrecta = true
    })
  }



}
