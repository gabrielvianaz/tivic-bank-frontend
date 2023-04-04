import { IDeposito } from '../../models/depositar/IDeposito';
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { DepositarService } from 'src/app/services/depositar/depositar.service';

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
