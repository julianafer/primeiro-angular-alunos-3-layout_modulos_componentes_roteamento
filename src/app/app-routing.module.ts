import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import { CadastroCarroComponent } from './carro/cadastro-carro/cadastro-carro.component';
import { ListagemCarrosComponent } from './carro/listagem-carro/listagem-carro.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'cadastrocarro',
    component: CadastroCarroComponent
  },
  {
    path: 'editacarro/:placa',
    component: CadastroCarroComponent
  },
  {
    path: 'listagemcarros',
    component: ListagemCarrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
