import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logado: boolean = true
  deslogado: boolean = true
  nome: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('logado') == "true") {
      this.logado = true
      this.deslogado = false
      this.nome = localStorage.getItem('usuario')
    } else {
      this.logado = false
      this.deslogado = true
    }

  }

  logout() {
    localStorage.setItem("token", "");
    localStorage.setItem("usuario", "")
    localStorage.setItem("logado", "false")    
    this.router.navigate(['/home']);
    this.logado = false
    this.deslogado = true
    location.assign('/home')
  }



}
