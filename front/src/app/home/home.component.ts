import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[];

  listaProdutosPrincipal: Produto[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProdutosDestaque()
    this.findAllProdutosPrincipal()
  }

  findAllProdutosDestaque() {
    this.produtosService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp.slice(1, 5);
    })
  }

  findAllProdutosPrincipal() {
    this.produtosService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutosPrincipal = resp.slice(1, 4);
    })
  }

}
