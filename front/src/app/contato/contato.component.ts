import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {Contato} from '../model/Contato'
import { ContatoService } from '../service/contato.service';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  faUser = faUser
  faThumbtack = faThumbtack
  faEnvelopeOpenText = faEnvelopeOpenText

  contato:Contato = new Contato

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
  }

  enviar() {
    this.contatoService.postContato(this.contato).subscribe((resp: Contato) => {
      this.contato = resp;
      alert('Mensagem enviada!')
      location.assign('/contato')
    }, (erro) => {
      alert("Algum dado invalido!")
    })
  }

}