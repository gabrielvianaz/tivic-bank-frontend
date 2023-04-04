import { IDadosConta } from '../../../models/dados-conta/IDadosConta';
import { Component } from '@angular/core';
import { formatarParaReal } from 'src/app/util/app.utils';
import { DadosContaService } from 'src/app/services/dados-conta/dados-conta.service';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.component.html',
  styleUrls: ['./dados-conta.component.css'],
})
export class DadosContaComponent {
  constructor(private dadosContaService: DadosContaService) {}

  dadosConta: IDadosConta = {
    id: null,
    saldo: null,
    cliente: {
      nome: null,
    },
  };

  ngOnInit(): void {
    this.getDadosConta();
  }

  getDadosConta() {
    this.dadosContaService
      .getDadosConta()
      .subscribe((r) => this.setDadosConta(r.body as IDadosConta));
  }

  setDadosConta(dadosConta: IDadosConta) {
    this.dadosConta = dadosConta;
  }

  saldoFormatado() {
    return formatarParaReal(Number(`${this.dadosConta.saldo}`));
  }
}
