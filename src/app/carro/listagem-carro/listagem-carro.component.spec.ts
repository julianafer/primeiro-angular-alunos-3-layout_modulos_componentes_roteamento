import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCarrosComponent } from './listagem-carro.component';

describe('ListagemCarroComponent', () => {
  let component: ListagemCarrosComponent;
  let fixture: ComponentFixture<ListagemCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCarrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
