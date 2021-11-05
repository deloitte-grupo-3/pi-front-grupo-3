import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../model/book';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  livros: Book[] = [];
  erro = false;

  query = "";

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params.q;
      fetch(`https://exlivraria.herokuapp.com/api/book/v1/findBookByTitle/${params.q}?direction=asc&limit=10&page=0`, {
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res?._embedded?.bookVoes) {
            this.livros = res._embedded.bookVoes;
            this.erro = false;
            return;
          }
          this.livros = [];
          this.erro = true;
        })
    })
  }

}
