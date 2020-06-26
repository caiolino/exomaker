import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Contato} from '../model/Contato'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  getAllContato() {
    return this.http.get('http://localhost:8080/contato',{headers:{'authorization': localStorage.getItem('token')}});
  }

  getByIdContato(id: number) {
    return this.http.get(`http://localhost:8080/contato/${id}`,{headers:{'authorization': localStorage.getItem('token')}});
  }

  postContato(contato: Contato) {
    return this.http.post('http://localhost:8080/contato/enviar', contato)
  }

  deleteContato(id: number) {
    return this.http.delete(`http://localhost:8080/contato/${id}`, { headers: { 'authorization': localStorage.getItem('token') } })
  }

}
