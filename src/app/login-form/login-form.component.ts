import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login?: string;
  senha?: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendForm(){
    console.log("Senha:" + this.senha + " login" + this.login)

  }

}
