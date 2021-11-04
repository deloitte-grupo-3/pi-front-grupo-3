import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';
// import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { PrateleiraLivrosComponent } from './componentes/prateleira-livros/prateleira-livros.component';
import { IndexComponent } from './rotas/index/index.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { BuscaComponent } from './rotas/busca/busca.component';
import { PaginaProdutoComponent } from './rotas/pagina-produto/pagina-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaFiltroComponent } from './rotas/categoria-filtro/categoria-filtro.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FinalizarCompraComponent } from './rotas/finalizar-compra/finalizar-compra.component';
import { NotifierModule } from 'angular-notifier';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ModalComponent,
    FooterComponent,
    BannerComponent,
    // CategoriasComponent,
    PrateleiraLivrosComponent,
    IndexComponent,
    SobreComponent,
    BuscaComponent,
    PaginaProdutoComponent,
    CategoriaFiltroComponent,
    CarrinhoComponent,
    FinalizarCompraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
