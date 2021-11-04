import * as Feather from 'feather-icons';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  @ViewChild('autenticar') modalLogin!: ModalComponent;
  @ViewChild('registro') modalRegistro!: ModalComponent;
  @ViewChild('carrinho') modalCarrinho!: ModalComponent;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  getCategorias() {
    return [
      {
        categoria: 'Ficção Científica',
        link: 'Fic%C3%A7%C3%A3o%20Cient%C3%ADfica',
      },
      {
        categoria: 'Romance',
        link: 'Romance',
      },
      {
        categoria: 'Suspense',
        link: 'Suspense',
      },
      {
        categoria: 'Auto-Ajuda',
        link: 'Autoajuda',
      },
      {
        categoria: 'Fantasia',
        link: 'Fantasia',
      },
      {
        categoria: 'Econômia',
        link: 'Economia',
      },
      {
        categoria: 'Tecnologia',
        link: 'Tecnologia',
      },
      {
        categoria: 'Biografia',
        link: 'Biografia',
      },
    ];
  }

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

  buscar(form: any) {
    this.router.navigate(['/busca'], { queryParams: { q: form.value.q } });
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

  sendForm() {
    fetch('https://exlivraria.herokuapp.com/auth/signin', {
      method: 'post',
      body: JSON.stringify({
        username: this.login,
        password: this.senha,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          this.erroAoLogar = true;
          throw new Error();
        }
        return res.json();
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.modalLogin.fecharModal();
        this.nomeUsuario = this.login;
        setTimeout(() => Feather.replace(), 0);
      });
  }

  registrarUsuario() {
    if (this.senhaCadastro !== this.confirmarSenha) {
      this.erroSenha = true;
      return;
    }

    fetch('https://exlivraria.herokuapp.com/auth/createUser', {
      method: 'post',
      body: JSON.stringify({
        username: this.usuarioCadastro,
        password: this.senhaCadastro,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          this.erroCadastro = true;
          throw new Error();
        }
        return res.json();
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.modalRegistro.fecharModal();
        this.nomeUsuario = this.usuarioCadastro;
        setTimeout(() => Feather.replace(), 0);
      });
  }

  abrirRegistro() {
    this.modalLogin.fecharModal();
    this.modalRegistro.abrirModal();
  }

  sair() {
    localStorage.removeItem('user');
    this.nomeUsuario = undefined;
    setTimeout(() => Feather.replace(), 0);
  }
}
