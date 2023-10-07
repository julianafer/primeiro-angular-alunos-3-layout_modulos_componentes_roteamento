import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {FlexModule} from '@angular/flex-layout';
import {RouterLink} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListagemCarrosComponent } from './listagem-carro/listagem-carro.component';


@NgModule({
  declarations: [
    CadastroCarroComponent,
    ListagemCarrosComponent
  ],
  exports:[
    CadastroCarroComponent,
    ListagemCarrosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FlexModule,
    RouterLink,
  ]
})
export class CarroModule { }
