import { Component } from '@angular/core';
import { Pieza } from '../interface/Pieza.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datos:Pieza[]= [
    {
      titulo:"Convertidor catalitico universal OBD ll",
      largo:'13',
      cuerpo:'4',
      img:"../../assets/img/Forma 1.png",
      boquillas:'2,2.25,2.5',
      num_parte:{
        parte1:'414220-EN',
        parte2:'414420-EN',
        parte3:'',
      },
      tipo:{
        tipo1:'Redondo corto',
        tipo2:'Redondo corto'
      },
      sensor:{
        sensor1:'No aplica',
        sensor2:'A la orilla',
        sensor3:'',
      },
      apli_vehicular:'4 Cil. Hasta 4.8lt'
     
    },
    
  ];

  constructor() {}

}
