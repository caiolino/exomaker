import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produtos';

@Component({
  selector: 'app-control-produtos',
  templateUrl: './control-produtos.component.html',
  styleUrls: ['./control-produtos.component.css']
})
export class ControlProdutosComponent implements OnInit {

  listaProdutos: Produto[];

  nome_produto: String;

  produtos: Produto = new Produto;

  p:number =1;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProdutos()
  }
  findAllProdutos() {
    this.produtosService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

  findNome() {
    this.produtosService.findBynome(this.nome_produto).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  cadastrar() {
    this.produtosService.postProduto(this.produtos).subscribe((resp: Produto) => {
      this.produtos = resp;
      location.assign('/control-produtos')
    }, (erro) => {
      alert("Algum dado invalido!")
    })
  }
}
