import { IOperacao } from './../../models/IOperacao';
import { ExtratoService } from './../../services/extrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent implements OnInit {
  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.getOperacoes();
  }

  extrato: Array<IOperacao> = [];
  paginas = 0;
  paginaAtual = 0;
  carregando = true;

  getOperacoes() {
    this.carregando = true;
    this.extratoService.getExtrato(this.paginaAtual).subscribe((r) => {
      const json = r.body as any;
      this.paginas = json.totalPages;
      (json.content as Array<IOperacao>).forEach((operacao) =>
        this.extrato.push(operacao)
      );
      this.carregando = false;
      this.paginaAtual++;
    });
  }

  formatarTransferencia(operacao: IOperacao) {
    return `Transferência - ${operacao.contaOrigem.cliente.nome} para ${operacao.contaDestino.cliente.nome}`;
  }

  formatarData(momento: string) {
    return new Date(Date.parse(momento)).toLocaleDateString();
  }
}
