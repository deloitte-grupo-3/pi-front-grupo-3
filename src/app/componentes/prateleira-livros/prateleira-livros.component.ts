import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../model/book'

@Component({
  selector: 'app-prateleira-livros',
  templateUrl: './prateleira-livros.component.html',
  styleUrls: ['./prateleira-livros.component.css']
})
export class PrateleiraLivrosComponent implements OnInit {

  constructor() { }

  @Input() livros!: Book[];

  ngOnInit(): void {  }
}
