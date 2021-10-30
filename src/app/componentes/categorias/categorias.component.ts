// import { Book } from '../../model/book';
// // import { LivroService } from '../../services/livro.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-categorias',
//   templateUrl: './categorias.component.html',
//   styleUrls: ['./categorias.component.css'],
// })
// export class CategoriasComponent implements OnInit {
//   private livros: Book[] = [];
//   private categorias: string[] = [];

//   constructor(private livroService: LivroService) {}

//   ngOnInit(): void {
//     this.livroService.getLivros().subscribe((response) => {
//       this.livros = response;
//     });

//   }

//   getCategorias() {
//     this.filtraCategorias();
//     return this.categorias;
//   }

//   filtraCategorias() {
//     this.livros.forEach((livro) => {
//       // this.categorias.push(livro.category);
//     });
//     this.categorias = [...new Set(this.categorias)]
//   }

//   teste(text: string){
//     console.log(text)
//   }
// }
