import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produtos: Produto = new Produto;

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produtos = resp
    })
  }

  salvar() {
    this.produtoService.putUser(this.produtos).subscribe((resp: Produto) => {
      this.produtos = resp
      alert('Produto editado com sucesso!')
      this.router.navigate(['/control-produtos'])

    })
  }
}
