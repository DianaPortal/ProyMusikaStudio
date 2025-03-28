import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

  @Input() public listImgCarrusel:any[] = []
  public currentPosition = 0;

  ngOnInit(){
    this.listImgCarrusel.map((i, index) => {
    })
  }

  setCurrentPosition(position:number){
    this.currentPosition = position
    this.listImgCarrusel.find(i => i.id === 0).marginLeft = -100 * position;
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.listImgCarrusel.length-1){
      finalPercentage = -100 * nextPosition;
    }
    else{
      nextPosition = 0;
    }
    this.listImgCarrusel.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition >= 0){
      finalPercentage = -100 * backPosition;
    }
    else{
      backPosition = this.listImgCarrusel.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.listImgCarrusel.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  }

}
