import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { CategoriaModel } from './categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
})

export class CategoriasComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel();
  categorias: Array<any> = new Array();

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  cadastrar(){
    console.log(this.categoria)
      this.categoriasService.cadastrarCategoria(this.categoria).subscribe(categoria => {
          this.categoria = new CategoriaModel;
          this.listarCategorias();
      }, err => {
        console.log("Erro ao cadastrar a categoria", err)
      })
  }

  listarCategorias(){
    this.categoriasService.listarCategorias().subscribe(categorias => {
      this.categorias = categorias;
    }, err => {
      console.log('Erro ao listar os produtos', err)
    })
  }

  atualizar(id: number){
    console.log(this.categoria)
    this.categoriasService.atualizarCategoria(id, this.categoria).subscribe(categoria => {
        this.categoria = new CategoriaModel;
        this.listarCategorias();
    }, err => {
      console.log("Erro ao atualizar o categoria", err)
    })
}

remover(id:number){
  this.categoriasService.removerCategoria(id).subscribe(categoria => {
    this.categoria = new CategoriaModel;
    this.listarCategorias();
    }, err => {
      console.log("Erro ao remover o categoria", err)
    })
}

}
