import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produtos: Produto = new Produto;

  delOk: boolean = false

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

  btnSim() {
    this.produtoService.deleteProduto(this.produtos.id).subscribe(() => {
      this.delOk = true
      //   this.router.navigate(['/users'])
      // localStorage.setItem("delOK",this.delOk.toString())
    })

  }

  btnNao() {
    this.router.navigate(['/control-produtos'])
  }
}
