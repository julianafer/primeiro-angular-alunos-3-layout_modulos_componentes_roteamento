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
  excluir(carroARemover: Carro): void {
    const indx = this.carros.findIndex(carro =>
      carro.placa === carroARemover.placa);

    this.carros.splice(indx, 1);
  }

}
