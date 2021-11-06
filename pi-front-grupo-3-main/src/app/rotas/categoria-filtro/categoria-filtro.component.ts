import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Book } from '../../model/book';
import { ActivatedRoute } from '@angular/router';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-categoria-filtro',
  templateUrl: './categoria-filtro.component.html',
  styleUrls: ['./categoria-filtro.component.css']
})
export class CategoriaFiltroComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) { }

  livros: Book[] = [];

  ngOnInit(): void {
    const categoria = this.route.snapshot.paramMap.get("categoria");

    fetch(`https://exlivraria.herokuapp.com/api/book/v1/search/category/${categoria}`, {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.livros = res._embedded.bookVoes;
      })
  }

  ngAfterViewInit() {
    Feather.replace();
  }

}
