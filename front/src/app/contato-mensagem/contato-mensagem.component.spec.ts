import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMensagemComponent } from './contato-mensagem.component';

describe('ContatoMensagemComponent', () => {
  let component: ContatoMensagemComponent;
  let fixture: ComponentFixture<ContatoMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
