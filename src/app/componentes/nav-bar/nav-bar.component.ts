import * as Feather from 'feather-icons';
import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { Book } from '../../model/book'


interface itensDoCarrinho {
  price: number,
  title: string,
  id: number,
  author: string,
  image: string;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  @Input() livros!: Book[];

  @ViewChild("autenticar") modalLogin!: ModalComponent;
  @ViewChild("registro") modalRegistro!: ModalComponent;
  @ViewChild("carrinho") modalCarrinho!: ModalComponent;

  ngOnInit(): void {
    let user: any = localStorage.getItem('user');

    if (user) {
      user = JSON.parse(user);
      this.nomeUsuario = user.username;
    }
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  buscar(form: any){
    this.router.navigate(["/busca"], {queryParams: {q: form.value.q}});
  }

  login?: string;
  senha?: string;

  confirmarSenha?: string;
  senhaCadastro?: string;
  usuarioCadastro?: string;
  nomeUsuario?: string | undefined;
  erroAoLogar?: boolean | undefined;
  erroSenha?: boolean | undefined;
  erroCadastro?: boolean | undefined;
  carrinho?: boolean | undefined = true;
  itensCarrinho: itensDoCarrinho[] = [];
  total =  0;

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
          this.erroAoLogar = true;
          throw new Error();
        }
        return res.json()
      })
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res));
        this.modalLogin.fecharModal();
        this.nomeUsuario = this.login;
        setTimeout(() => Feather.replace(), 0);
      })
  }

  registrarUsuario(){

    if (this.senhaCadastro !== this.confirmarSenha) {
      this.erroSenha = true;
      return;
    }

    fetch("https://exlivraria.herokuapp.com/auth/createUser", {
      method: "post",
      body: JSON.stringify({
        username: this.usuarioCadastro,
        password: this.senhaCadastro
      }),
      headers: {
        "content-type": "application/json"
      } 
    })
      .then(res => {
        if (!res.ok) {
          this.erroCadastro = true;
          throw new Error();
        }
        return res.json()
      })
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res));
        this.modalRegistro.fecharModal();
        this.nomeUsuario = this.usuarioCadastro;
        setTimeout(() => Feather.replace(), 0);
      })
  }

  abrirRegistro() {
    this.modalLogin.fecharModal();
    this.modalRegistro.abrirModal();
  }

  sair(){
    localStorage.removeItem('user');
    this.nomeUsuario = undefined;
    setTimeout(() => Feather.replace(), 0);
  }

  abrirCarrinho() {
    this.total = 0;
    this.modalCarrinho.abrirModal();
    const carrinho = localStorage.getItem("carrinho");
    if (carrinho) {
      this.itensCarrinho = JSON.parse(carrinho);
    }
    this.itensCarrinho.forEach(item => {
      this.total += item.price;
    })
  }
  
}
