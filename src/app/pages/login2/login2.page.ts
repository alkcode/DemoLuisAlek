import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  nombre : string  = 'Aleksei'
  password : string  = ''

  usuario = {
    email:'',
    password :''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit");
    console.log(this.usuario);
    
  }

}
