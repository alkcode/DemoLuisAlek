import { Component } from '@angular/core';

interface Datos{
  titulo:string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datos:Datos[]= [
    {
      titulo:"Convertidor catalitico universal OBD ll",
      img:"../../assets/img/Forma 1.png",
    },
    {
      titulo:"Convertidor catalitico universal OBD ll",
      img:"../../assets/img/Forma 2.png",
    },
    {
      titulo:"Convertidor catalitico universal OBD ll",
      img:"../../assets/img/Forma 3.png",
    },
    {
      titulo:"Cartucho OBD ll",
      img:"../../assets/img/Forma 4.png",
    },
    {
      titulo:"Cartucho OBD ll",
      img:"../../assets/img/Forma 5.png",
    },
    {
      titulo:"Cartucho OBD ll",
      img:"../../assets/img/Forma 6.png",
    },
  ];

  constructor() {}

}
