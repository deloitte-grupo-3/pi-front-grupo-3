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
  idCarrinho = 0;
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

  removerDoCarrinho(idCarrinho:any){
    this.idCarrinho = idCarrinho;
    this.modalCarrinho.abrirModal();
    const carrinho = localStorage.getItem("carrinho");
    if(carrinho){
      this.itensCarrinho = JSON.parse(carrinho);
      for(let i = 0; i < this.itensCarrinho.length; i++){
        if(this.itensCarrinho[i].id === idCarrinho){
          delete this.itensCarrinho[i];
          idCarrinho = 0;
        }
        else{
          this.novoCarrinho.push(this.itensCarrinho[i]);
          console.log(this.itensCarrinho[i]);
        }
      }
      localStorage.removeItem('carrinho');
      localStorage.setItem('carrinho', JSON.stringify(this.novoCarrinho));
      this.novoCarrinho = [];
      this.modalCarrinho.abrirModal();
      }
     else{
      this.itensCarrinho = []
    }
    

  }
}
