import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './rotas/index/index.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { BuscaComponent } from './rotas/busca/busca.component';
import { PaginaProdutoComponent } from './rotas/pagina-produto/pagina-produto.component';
import { FinalizarCompraComponent } from './rotas/finalizar-compra/finalizar-compra.component'

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
  },
  {
    path: 'finalizar-compra',
    component: FinalizarCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
