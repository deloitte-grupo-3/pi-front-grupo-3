import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  parametros = {
    titulo: "Sobre este site",
    descricao: "Site desenvolvido como projeto integrador do curso de desenvolvimento full stack da escola Digital House em parceria com a ampresa Deloitte.",
    imagem: "../../assets/imagens/dh-deloitte.png"
  };

  ngOnInit(): void {
  }

}