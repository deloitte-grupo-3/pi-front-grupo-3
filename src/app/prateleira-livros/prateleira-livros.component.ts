import { Book } from './../model/book';
import { LivroService } from './../services/livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prateleira-livros',
  templateUrl: './prateleira-livros.component.html',
  styleUrls: ['./prateleira-livros.component.css']
})
export class PrateleiraLivrosComponent implements OnInit {

  private livros: Book[] = []

  constructor(private livroService:LivroService) { }

  ngOnInit(): void {
    this.livroService.getLivros().subscribe(livros => {
      this.livros = livros;
    })
  }

  getLivros(){
    return this.livros;
  }

}
