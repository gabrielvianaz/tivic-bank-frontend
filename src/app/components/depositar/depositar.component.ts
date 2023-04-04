import { IDeposito } from './../../models/IDeposito';
import { ToastrService } from 'ngx-toastr';
import { DepositarService } from './../../services/depositar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css'],
})
export class DepositarComponent {
  constructor(
    private toast: ToastrService,
    private depositarService: DepositarService
  ) {}

  deposito: IDeposito = {
    valor: 0,
  };

  carregando = false;

  depositar() {
    this.carregando = true;
    this.depositarService.depositar(this.deposito).subscribe(
      () => {
        this.toastDepositoEfetuadoComSucesso();
        this.resetarValorDeposito();
        this.carregando = false;
      },
      () => {
        this.toastErroDeposito();
        this.resetarValorDeposito();
        this.carregando = false;
      }
    );
  }

  resetarValorDeposito() {
    this.deposito.valor = 0;
  }

  toastDepositoEfetuadoComSucesso() {
    this.toast.success('Depósito efetuado com sucesso!');
  }

  toastErroDeposito() {
    this.toast.error('Erro ao efetuar depósito!');
  }
}
