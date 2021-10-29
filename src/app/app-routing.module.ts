import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './rotas/index/index.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { BuscaComponent } from './rotas/busca/busca.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
