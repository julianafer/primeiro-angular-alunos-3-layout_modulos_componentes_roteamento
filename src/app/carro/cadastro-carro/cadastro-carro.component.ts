import { Component, OnInit } from '@angular/core';
import { Carro} from '../../shared/modelo/carro';
import { CARROS } from '../../shared/modelo/CARROS';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.css']
})
export class CadastroCarroComponent{

  carroDeManutencao: Carro;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  carros = CARROS;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.carroDeManutencao = new Carro();
    const placaParaEdicao = this.rotaAtual.snapshot.paramMap.get('placa');
    if (placaParaEdicao) {
      // editando
      const carroEncontrado = this.carros.find(
        carro => carro.placa === placaParaEdicao);
      if (carroEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.carroDeManutencao = carroEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.carroDeManutencao) {
      this.carros.push(this.carroDeManutencao);
    }
    this.carroDeManutencao = new Carro();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemcarro']);
  }
 
}
