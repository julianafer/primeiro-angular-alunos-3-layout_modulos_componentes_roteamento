import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCarroComponent } from './listagem-carro.component';

describe('ListagemCarroComponent', () => {
  let component: ListagemCarroComponent;
  let fixture: ComponentFixture<ListagemCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
