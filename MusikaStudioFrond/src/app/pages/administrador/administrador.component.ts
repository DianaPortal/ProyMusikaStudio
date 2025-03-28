import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  public cama = "dormir";
  public storage!: boolean;
  public carrito:any;

  private bootstrapLink!: HTMLLinkElement;

   constructor(private router: Router, private renderer: Renderer2,){
    }

  ngOnInit(): void {
    const hayAlgoEnElStorage = localStorage.getItem("usuario")
    if(hayAlgoEnElStorage) this.storage = false
    else this.storage = true

    this.bootstrapLink = this.renderer.createElement('link');
    this.bootstrapLink.rel = 'stylesheet';
    this.bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    this.renderer.appendChild(document.head, this.bootstrapLink);
  }

  ngOnDestroy(): void {
    // Eliminar la hoja de estilos cuando se destruya el componente
    if (this.bootstrapLink) {
      this.renderer.removeChild(document.head, this.bootstrapLink);
    }
  }

  salir(){
    try{
      localStorage.removeItem("usuario")
      this.storage = false;
      this.router.navigate(['./home'])
    }
    catch{
      console.log("algo malió sal");
    }
  }

}
