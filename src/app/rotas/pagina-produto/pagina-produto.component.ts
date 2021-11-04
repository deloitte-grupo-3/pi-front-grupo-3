import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Book } from '../../model/book';
import { ActivatedRoute } from '@angular/router';
import * as Feather from 'feather-icons';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit, AfterViewInit {

  private readonly notifier: NotifierService;

  constructor(private route: ActivatedRoute, notifierService: NotifierService) { 
    this.notifier = notifierService;
  }

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

  adicionarAoCarrinho() {
    const produto = {
      id: this.livro.id,
      author: this.livro.author,
      title: this.livro.title,
      image: this.livro.image,
      price: this.livro.price
    }
    let carrinho: any = localStorage.getItem('carrinho');
    if (carrinho) {
      carrinho = JSON.parse(carrinho);
    } else {
      carrinho = [];
    }
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    this.notifier.notify('success', 'Livro adicionado ao carrinho!');
  }

}
