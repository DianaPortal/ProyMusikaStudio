import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public cama = "dormir";
  public storage!: boolean;
  public carrito:any;

  constructor(private router: Router,){
  }

  mostrarNavBar(){
    const navBar = document.getElementById('navbar');
    if (navBar) {
      navBar.style.transform = 'translateX(0)';
    }
  }

  contraerNavBar(){
    const navBar = document.getElementById('navbar');
    if (navBar) {
      navBar.style.transform = 'translateX(-100%)';
    }
  }

  ngOnInit(): void {
    const hayAlgoEnElStorage = localStorage.getItem("usuario")
    if(hayAlgoEnElStorage) this.storage = false
    else this.storage = true
  }

  salir(){
    try{
      localStorage.removeItem("usuario")
      this.storage = false;
      location.reload()
    }
    catch{
      console.log("algo malió sal");
    }
  }

}
