import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  adm:boolean = false

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('logado') == "true" && localStorage.getItem('admin')=='true') {
      this.adm = true
    }else{
      this.adm = false
    }
  }
}
