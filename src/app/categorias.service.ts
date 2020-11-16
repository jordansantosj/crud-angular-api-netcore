import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CategoriaModel } from './categorias/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  cadastrarCategoria(categoria: CategoriaModel): Observable<any>{
    return this.http.post('https://localhost:5001/v1/categories', categoria)
  }

  listarCategorias() : Observable<any>{
    return this.http.get('https://localhost:5001/v1/categories');
  }

  atualizarCategoria(id: any, categoria: CategoriaModel): Observable<any>{
    return this.http.put('https://localhost:5001/v1/categories/'.concat(id), categoria)
  }

  removerCategoria(id:any){
    return this.http.delete('https://localhost:5001/v1/categories/'.concat(id))
  }
}
