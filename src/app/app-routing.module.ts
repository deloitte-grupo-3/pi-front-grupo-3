import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './rotas/index/index.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { BuscaComponent } from './rotas/busca/busca.component';
import { PaginaProdutoComponent } from './rotas/pagina-produto/pagina-produto.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'busca',
    component: BuscaComponent
  },
  {
    path: 'livro/:id',
    component: PaginaProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
