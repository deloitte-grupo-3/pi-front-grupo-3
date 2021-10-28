import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  parametros = {
    titulo: "Você está na página 'Sobre'.",
    descricao: "Obrigado por ler nossa descrição! Obrigado por ler nossa descrição! Obrigado por ler nossa descrição!",
    imagem: "../../assets/imagens/dh-deloitte.png"
  };

  ngOnInit(): void {
  }

}
