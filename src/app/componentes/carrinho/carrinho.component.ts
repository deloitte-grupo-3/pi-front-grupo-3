import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  @Input() modalCarrinho: any;
  @Input() itensCarrinho: itensDoCarrinho[] = [];
  @Input() total: number = 0;
  
  finalizarCompra() {
    this.modalCarrinho.fecharModal();
  }

  ngOnInit(): void {
  }

//  total = (() => {
//    let total = 0;
//    this.itensCarrinho.forEach(item => {
//     total += item.price;
//    })
//    console.log(total);
//    return total;
//  })();

}
