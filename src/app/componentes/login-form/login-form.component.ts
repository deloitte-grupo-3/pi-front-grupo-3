import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() verificar!:boolean;


  login?: string;
  senha?: string;

  constructor() { }

  ngOnInit(): void { }

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

  estadoModal = false;
  keyListener: any = null;

  alternarModal() {
    this.estadoModal = !this.estadoModal;
  }

  abrirModal(){
    this.estadoModal = true;
    this.apertarEsc();
  }

  fecharModal(){
    this.estadoModal = false;
    document.body.removeEventListener("keyup", this.keyListener);
  }

  apertarEsc(){
    this.keyListener = document.body.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.fecharModal();
      }
    })
  }

  clickFora(e:any){
    if (e.target.classList.contains("modal")){
      this.fecharModal();
    }
  }

}