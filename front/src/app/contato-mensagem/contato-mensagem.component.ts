import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';
import { ContatoService } from '../service/contato.service';



@Component({
  selector: 'app-contato-mensagem',
  templateUrl: './contato-mensagem.component.html',
  styleUrls: ['./contato-mensagem.component.css']
})
export class ContatoMensagemComponent implements OnInit {

  listaContato: Contato[];

  p: number = 1

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.findAllContato();
  }

  findAllContato() {
    this.contatoService.getAllContato().subscribe((resp: Contato[]) => {
      this.listaContato = resp;
    });
  }

  deletar(id: number) {
    this.contatoService.deleteContato(id).subscribe();
    alert('Mensagem deleteda!')
    location.assign('/contato-mensagem')
  }
}
