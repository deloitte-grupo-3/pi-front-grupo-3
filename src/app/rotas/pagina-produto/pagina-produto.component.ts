import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Book } from '../../model/book';
import { ActivatedRoute } from '@angular/router';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) { }

  livro: Book = {};

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");
    
    fetch(`https://exlivraria.herokuapp.com/api/book/v1/${id}`, {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.livro = res;
        console.log(res);
      })
      
  }

  ngAfterViewInit() {
    Feather.replace();
  }

}
