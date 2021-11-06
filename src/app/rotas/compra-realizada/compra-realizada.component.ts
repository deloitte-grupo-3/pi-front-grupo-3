import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-compra-realizada',
  templateUrl: './compra-realizada.component.html',
  styleUrls: ['./compra-realizada.component.css']
})
export class CompraRealizadaComponent implements OnInit, AfterViewInit {

  constructor() { }

  dados: any = {};

  ngOnInit(): void {
    let dados: any = localStorage.getItem('dadosForm');
    this.dados = JSON.parse(dados);
    console.log(dados);
    localStorage.removeItem('dadosForm');
    localStorage.removeItem('carrinho');
  }
  ngAfterViewInit() {
    Feather.replace();
  }

}