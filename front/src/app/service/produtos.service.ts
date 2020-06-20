import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProdutos() {
    return this.http.get('http://localhost:8080/produtos');
  }

  findBynome(nome_produto: String) {
    return this.http.get(`http://localhost:8080/produtos/produto/${nome_produto}`)
  }

  findByPreco(preco: string) {
    return this.http.get(`http://localhost:8080/produtos/preco/${preco}`)
  }

  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`)
  }

  putUser(Produto: Produto) {
    return this.http.put('http://localhost:8080/produtos', Produto,{headers:{'authorization': localStorage.getItem('token')}});
  }

  postProduto(produto: Produto) {
    return this.http.post('http://localhost:8080/produtos/cadastrar', produto, { headers: { 'authorization': localStorage.getItem('token') } })
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`, { headers: { 'authorization': localStorage.getItem('token') } })
  }
}
