import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlProdutosComponent } from './control-produtos.component';

describe('ControlProdutosComponent', () => {
  let component: ControlProdutosComponent;
  let fixture: ComponentFixture<ControlProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
