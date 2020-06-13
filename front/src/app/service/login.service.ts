import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(user:string, senha:String){
     const headers = new HttpHeaders({Authorization:'Basic' + btoa(user+":"+senha)})
    return this.http.get("http://localhost:8080/login",{headers,responseType:'text' as 'json'});
  }

}
