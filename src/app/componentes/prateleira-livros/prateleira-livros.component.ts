import { Book } from './../model/book';
// import { LivroService } from '../../services/livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prateleira-livros',
  templateUrl: './prateleira-livros.component.html',
  styleUrls: ['./prateleira-livros.component.css']
})
export class PrateleiraLivrosComponent implements OnInit {

  livros: Book[] = []

  constructor() { }

  ngOnInit(): void {
    // this.livroService.getLivros().subscribe(livros => {
    //   this.livros = livros;
    // })
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
