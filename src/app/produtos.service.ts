import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {ProdutoModel} from './produtos/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: ProdutoModel): Observable<any>{
    return this.http.post('https://localhost:5001/v1/products', produto)
  }

  listarProdutos() : Observable<any>{
    return this.http.get('https://localhost:5001/v1/products');
  }

  atualizarProduto(id: any, produto: ProdutoModel): Observable<any>{
    return this.http.put('https://localhost:5001/v1/products/'.concat(id), produto)
  }

  removerProduto(id:any){
    return this.http.delete('https://localhost:5001/v1/products/'.concat(id))
  }
}
