import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { LoginFormComponent } from './componentes/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { PrateleiraLivrosComponent } from './componentes/prateleira-livros/prateleira-livros.component';
import { IndexComponent } from './rotas/index/index.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { BuscaComponent } from './rotas/busca/busca.component';
import { PaginaProdutoComponent } from './rotas/pagina-produto/pagina-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginFormComponent,
    FooterComponent,
    BannerComponent,
    CategoriasComponent,
    PrateleiraLivrosComponent,
    IndexComponent,
    SobreComponent,
    BuscaComponent,
    PaginaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }