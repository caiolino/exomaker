import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { FaqComponent } from './faq/faq.component';
import { SobreComponent } from './sobre/sobre.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProdutosComponent } from './produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ItemComponent } from './item/item.component'
import { LoginService } from './service/login.service';
import { ControlProdutosComponent } from './control-produtos/control-produtos.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContatoMensagemComponent } from './contato-mensagem/contato-mensagem.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    PoliticasComponent,
    FaqComponent,
    SobreComponent,
    ProdutosComponent,
    UsersComponent,
    CadastroComponent,
    LoginComponent,
    EditUserComponent,
    DeleteUserComponent,
    ItemComponent,
    ControlProdutosComponent,
    EditProdutoComponent,
    DeleteProdutoComponent,
    ContatoMensagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
