import { Component } from '@angular/core';
import { DefaultCadastroLayout } from '../../components/default-cadastro-layout/default-cadastro-layout';

@Component({
  selector: 'app-cadastro',
  imports: [DefaultCadastroLayout],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {}
