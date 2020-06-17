import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../model/Users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  putUser(Users: Users) {
    return this.http.put('http://93.188.161.223:9000/cadastrar', Users);
  }

}
