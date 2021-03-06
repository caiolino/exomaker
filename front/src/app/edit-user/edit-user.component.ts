import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Users } from '../model/Users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: Users = new Users

  confirm: Users = new Users

  alerta: boolean = false;

  senhaMin: boolean = false;

  validEmail: boolean = false;

  valido: boolean = true

  validUser: boolean = false;

  validCpf: boolean = false;


  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.usersService.getByIdUser(id).subscribe((resp: Users) => {
      this.user = resp
    })
  }

  salvar() {
    if (this.user.senha != this.confirm.senha || this.user.senha.length < 6) {
      this.alerta = true;
      this.valido = false;
    }
    if (this.user.email.length < 6) {
      this.senhaMin = true;
      this.valido = false;
    }
    //validacao do email
    if (this.user.email.includes("@") == false) {
      this.validEmail = true;
      this.valido = false;
    }
    if (this.user.email.endsWith(".com") == true || this.user.email.endsWith(".com.br") == true) {
      this.validEmail = false;
      this.valido = true;
    } else {
      this.validEmail = true;
      this.valido = false;
    }

    //validcau usuario
    if (this.user.usuario.includes(" ") || this.user.usuario.length < 2) {
      this.validUser = true
      this.valido = false;
    }

    //Validcao do cpf

    // Elimina CPFs invalidos conhecidos	
    let cpf = this.user.cpf.replace(/[^\d]+/g, '');
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999") {
      this.valido = false;
      this.validCpf = true;
    }

    // Valida 1o digito	
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
      rev = 0;
    }
    if (rev != parseInt(cpf.charAt(9))) {
      this.valido = false
      this.validCpf = true;
    }


    // Valida 2o digito	
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
      rev = 0;
    }
    if (rev != parseInt(cpf.charAt(10))) {
      this.valido = false
      this.validCpf = true;
    }

    if (this.valido == true) {
      this.usersService.putUser(this.user).subscribe((resp: Users) => {
        this.user = resp
        alert("Modificaçoes Salvas!")
        this.router.navigate(['/users'])
        location.assign('/users')
      }), (erro) => {
        alert("Algum dado invalido!")
      }
    }

  }

}