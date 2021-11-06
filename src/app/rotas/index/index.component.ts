import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  livros: Book[] = [];
  pagina: any = {};

  parametros = {
    titulo: "Bem vindo à nossa loja",
    descricao: "Bem vindo à página inicial da Expansão Livraria. Os melhores livros com os melhores preços.",
    imagem: "../../assets/banner/logo.svg"
  };

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      fetch(`https://exlivraria.herokuapp.com/api/book/v1?direction=asc&limit=10&page=${params.page || 0}`, {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.livros = res._embedded.bookVoes;
        this.pagina = res.page;
        console.log(this.pagina);
      })
    })

  }

  

}
