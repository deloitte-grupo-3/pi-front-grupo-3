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
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() modalCarrinho: any;
  @Input() modalLogin: any;
  @Input() itensCarrinho: itensDoCarrinho[] = [];
  @Input() total: number = 0;
  @Input() comprar?: string;
  
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

}
