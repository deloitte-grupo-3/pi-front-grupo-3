import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  livros: Book[] = [];

  parametros = {
    titulo: "Bem vindo à nossa loja",
    descricao: "Bem vindo à página inicial. Bem vindo à página inicial. Bem vindo à página inicial. Bem vindo à página inicial.",
    imagem: "../../assets/banner/logo.svg"
  };

  ngOnInit(): void {

    fetch('https://exlivraria.herokuapp.com/api/book/v1?direction=asc&limit=10&page=0', {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.livros = res._embedded.bookVoes;
        console.log(res._embedded.bookVoes);
      })

  }

  

}
