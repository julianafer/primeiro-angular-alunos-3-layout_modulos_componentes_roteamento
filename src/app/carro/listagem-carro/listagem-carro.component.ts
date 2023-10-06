import { Component } from '@angular/core';
import {Carro} from '../../shared/modelo/carro';
import {CARROS} from '../../shared/modelo/CARROS';

@Component({
  selector: 'app-listagem-Carros',
  templateUrl: './listagem-carro.component.html',
  styleUrls: ['./listagem-carro.component.css']
})
export class ListagemCarrosComponent {

  carros = CARROS;
  excluir(CarroARemover: Carro): void {
    const indx = this.carros.findIndex(carro =>
      carro.placa === CarroARemover.placa);

    this.carros.splice(indx, 1);
  }

}
