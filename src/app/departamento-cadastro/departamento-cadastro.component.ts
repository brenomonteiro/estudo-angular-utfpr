import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-departamento-cadastro',
  templateUrl: './departamento-cadastro.component.html',
  styleUrls: ['./departamento-cadastro.component.css']
})
export class DepartamentoCadastroComponent {
salvar(departamentoForm:NgForm){
  console.log(departamentoForm.value.nome)
  departamentoForm.reset();
}
}
