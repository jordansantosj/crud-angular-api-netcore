import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProdutosComponent } from './produtos/produtos.component';
import {ProdutosService} from './produtos.service';

import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasService } from './categorias.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CategoriasComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule ,ProdutosService, CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
