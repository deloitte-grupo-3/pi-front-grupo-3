import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  parametros = {
    titulo: "Você está na página inicial.",
    descricao: "Bem vindo à página inicial. Bem vindo à página inicial. Bem vindo à página inicial. Bem vindo à página inicial.",
    imagem: "../../assets/banner/logo.svg"
  };

  ngOnInit(): void {
  }

}
