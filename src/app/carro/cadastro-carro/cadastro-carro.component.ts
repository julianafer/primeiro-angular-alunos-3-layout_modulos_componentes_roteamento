import { Component, OnInit } from '@angular/core';
import { Carro} from '../../shared/modelo/carro';
import { CARROS } from '../../shared/modelo/CARROS';

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.css']
})
export class CadastroCarroComponent implements OnInit {

  carro: Carro;
  carros: Array<Carro>;
  
  constructor() {
    this.carro = new Carro();
    this.carros = new Array<Carro>();
  }

  ngOnInit(): void {
    
  }

  inserirCarro(): void {
    this.carros.push(this.carro);
    this.carro = new Carro();
  }
 
}
