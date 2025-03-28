import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  public usuarioCreado!: Usuario;

  public loading: boolean = false

  public formularioRegistrar = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    dni: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
    contrasenia: new FormControl('', Validators.required)
  });

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ){}

  onSubmit(){

    if(this.formularioRegistrar.invalid){
      console.log("formulario no enviado");
      return;
    }
    console.log("formulario enviado");
    this.registrarse()

  }

  registrarse(){

    this.loading = true;

    const usuario: Usuario = {
      nombre: this.formularioRegistrar.get('nombre')?.value as string,
      apellido: this.formularioRegistrar.get('apellido')?.value as string,
      telefono: this.formularioRegistrar.get('telefono')?.value as string,
      fechaRegistro: new Date().toISOString(),
      direccion: this.formularioRegistrar.get('direccion')?.value as string,
      correo: this.formularioRegistrar.get('correo')?.value as string,
      password: this.formularioRegistrar.get('contrasenia')?.value as string,
      nDocumento: this.formularioRegistrar.get('dni')?.value as string,
      rol: {
        idRol: 1
      },
      tipoDocumento: {
        idDocumento: 1
      }
    }

    this._usuarioService.crearUsuario(usuario).subscribe(
      (response) => {
        this.iniciarSesion(usuario.correo!, usuario.password!)
        this.loading = false
        // this.router.navigate(['./home'])
      },
      (error) => {
        this.iniciarSesion(usuario.correo!, usuario.password!)
        this.loading = false
      }
    )
  }

  iniciarSesion(correo:string, contrasenia:string){
    this._usuarioService.listarUsuario().subscribe(data => {
      const usuarioFiltrado = data.find(x => x.correo == correo && x.password == contrasenia)
      localStorage.setItem("usuario", JSON.stringify(usuarioFiltrado))
      this.router.navigate(['./home'])

    })
  }



}
