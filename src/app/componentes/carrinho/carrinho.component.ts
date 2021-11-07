import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

interface itensDoCarrinho {
  price: number,
  title: string,
  id: number,
  author: string,
  image: string;
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private readonly notifier: NotifierService;

  constructor(private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  @Input() abrirCarrinho?: any;
  @Input() modalCarrinho: any;
  @Input() modalLogin: any;
  @Input() itensCarrinho: itensDoCarrinho[] = [];
  @Input() total: number = 0;
  @Input() comprar?: string;
  novoCarrinho:itensDoCarrinho[] = [];
  
  finalizarCompra() {
    this.modalCarrinho.fecharModal();
    let usuario: any = localStorage.getItem('user');    
    if (!usuario) {
      this.modalLogin.abrirModal();
      console.log(usuario);
    } else {
      this.router.navigate(['/finalizar-compra']);
    }
  }

  ngOnInit(): void {
  }

  removerDoCarrinho(index:any){
    this.itensCarrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));
    this.abrirCarrinho();
    this.notifier.notify('error', 'Livro removido do carrinho.');
  }
}
