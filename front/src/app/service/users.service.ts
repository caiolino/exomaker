import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users} from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://localhost:8080/usuarios',{headers:{'authorization': localStorage.getItem('token')}});
  }

  postUser(Users: Users) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar',Users)
  }

  getByIdUser(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`,{headers:{'authorization': localStorage.getItem('token')}})

  }

  putUser(Users: Users) {
    return this.http.put('http://localhost:8080/usuarios', Users,{headers:{'authorization': localStorage.getItem('token')}});
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`,{headers:{'authorization': localStorage.getItem('token')}})
  }

  findBynome(nome: String) {
    return this.http.delete(`http://localhost:8080/usuarios/${nome}`,{headers:{'authorization': localStorage.getItem('token')}})
  }

  

}
