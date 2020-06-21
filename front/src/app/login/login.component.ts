import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersLogin } from '../model/Users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UsersLogin = new UsersLogin;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin() {

    this.loginService.login(this.user).subscribe((resp: UsersLogin) => {
      this.user = resp;
      localStorage.setItem("token", resp.token);
      localStorage.setItem("usuario", resp.usuario)
      localStorage.setItem("logado", "true")

      if(resp.admin == true){
        localStorage.setItem("admin", 'true')
      }else{
        localStorage.setItem("admin", 'false')
      }
      
      this.router.navigate(['/home']);
      location.assign('/home')
    }, (erro) => {
      alert("Usuário ou senha inválidos")
    })

  }


}
