import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users, UsersLogin } from '../model/Users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: String
  senha: String

  constructor(private http: HttpClient) { }

  login(user: UsersLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', user)
  }

}
