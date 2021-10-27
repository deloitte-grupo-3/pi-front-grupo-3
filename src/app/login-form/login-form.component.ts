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
    fetch("https://exlivraria.herokuapp.com/auth/signin", {
      method: "post",
      body: JSON.stringify({
        username: this.login,
        password: this.senha
      }),
      headers: {
        "content-type": "application/json"
      } 
    })
      .then(res => {
        if (!res.ok) {

        }
        console.log(this.login);
        return res.json()
      })
      .then(res => {
        console.log(res);
      })
  }

}
