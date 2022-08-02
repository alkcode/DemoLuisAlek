import { Component, OnInit } from '@angular/core';
interface Componente{
  icono:string;
  nombre: string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[] = [
    {
      icono:'american-football-outline',
      nombre:'Login',
      redirectTo:'/login2'
    },
    {
      icono:'alert-outline',
      nombre:'Alert',
      redirectTo:'/alert'
    },
    {
      icono:'camera-outline',
      nombre:'Camara',
      redirectTo:'/camara'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
