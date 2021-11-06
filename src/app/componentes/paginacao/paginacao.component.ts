import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  constructor() { }

  @Input() pagina: any;

  ngOnInit(): void {
  }

}
