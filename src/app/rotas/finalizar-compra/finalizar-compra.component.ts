import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

interface itensDoCarrinho {
  price: number,
  title: string,
  id: number,
  author: string,
  image: string;
}
@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})


export class FinalizarCompraComponent implements OnInit {

  router: Router;
  constructor(router: Router) { 
    this.router = router;
  }

  endereco: string = "";
  cep: string = "";
  nome: string = "";
  email: string = "";
  
  itensCarrinho: itensDoCarrinho[] = [];
  total =  0;
  
  ngOnInit(): void {
    this.total = 0;
    const carrinho = localStorage.getItem("carrinho");
    if (carrinho) {
      this.itensCarrinho = JSON.parse(carrinho);
    }
    this.itensCarrinho.forEach(item => {
      this.total += item.price;
    })
    
    let usuario: any = localStorage.getItem('user');
    
    if (!usuario || !this.itensCarrinho.length) {
      this.router.navigate(['/', '/']);
    }
  }
  
  onSubmit() {
    let dadosForm = {
      endereco: this.endereco,
      cep: this.cep,
      nome: this.nome,
      email: this.email
    };
    localStorage.setItem('dadosForm', JSON.stringify(dadosForm))
    this.router.navigate(["/compra-realizada"]);
  }
}
