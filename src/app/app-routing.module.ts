import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosPesquisaComponent } from './departamentos-pesquisa/departamentos-pesquisa.component';
import { DepartamentoCadastroComponent } from './departamento-cadastro/departamento-cadastro.component';

const routes: Routes = [

  {path:'departamentos', component: DepartamentosPesquisaComponent },
  {path:'departamentos/novo', component: DepartamentoCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
