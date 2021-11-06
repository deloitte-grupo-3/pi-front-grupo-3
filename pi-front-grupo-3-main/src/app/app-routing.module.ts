import { CategoriaFiltroComponent } from './rotas/categoria-filtro/categoria-filtro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './rotas/index/index.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { BuscaComponent } from './rotas/busca/busca.component';
import { PaginaProdutoComponent } from './rotas/pagina-produto/pagina-produto.component';
import { FinalizarCompraComponent } from './rotas/finalizar-compra/finalizar-compra.component';
import { CompraRealizadaComponent } from './rotas/compra-realizada/compra-realizada.component';

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
    path: 'categoria/:categoria',
    component: CategoriaFiltroComponent
  },
  {
    path: 'finalizar-compra',
    component: FinalizarCompraComponent
  },
  {
    path: 'compra-realizada',
    component: CompraRealizadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
