import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ProdutoModel } from './produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtos: Array<any> = new Array();

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  cadastrar(){
      this.produtosService.cadastrarProduto(this.produto).subscribe(produto => {
          this.produto = new ProdutoModel();
          this.listarProdutos();
      }, err => {
        console.log("Erro ao cadastrar o produto", err)
      })
  }

  listarProdutos(){
    this.produtosService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, err => {
      console.log('Erro ao listar os produtos', err)
    })
  }

  atualizar(id: number){
    this.produto.id = id;
      this.produtosService.atualizarProduto(id, this.produto).subscribe(produto => {
          this.produto = new ProdutoModel();
          this.listarProdutos();
      }, err => {
        console.log("Erro ao atualizar o produto", err)
      })
  }

  remover(id:number){
    this.produtosService.removerProduto(id).subscribe(produto => {
      this.produto = new ProdutoModel;
      this.listarProdutos();
      }, err => {
        console.log("Erro ao remover o produto", err)
      })
  }
}
