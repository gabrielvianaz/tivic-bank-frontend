import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IContaDestino } from 'src/app/models/transferir/IContaDestino';
import { ITransferencia } from 'src/app/models/transferir/ITransferencia';
import { TransferirService } from 'src/app/services/transferir/transferir.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css'],
})
export class TransferirComponent {
  constructor(
    private toast: ToastrService,
    private transferirService: TransferirService
  ) {}

  transferencia: ITransferencia = {
    valor: 0,
    contaDestino: {
      id: null,
      tipo: null,
      cliente: {
        nome: '',
      },
    },
  };

  carregando = false;

  getContaDestino() {
    this.resetContaDestino();
    if (this.transferencia.contaDestino.id) {
      this.transferirService
        .getContaDestino(this.transferencia.contaDestino.id)
        .subscribe(
          (r) => {
            this.setContaDestino(r.body as IContaDestino);
          },
          (r) => this.toast.error(r.error.mensagem)
        );
    }
  }

  transferir() {
    this.carregando = true;
    this.transferirService.transferir(this.transferencia).subscribe(
      () => {
        this.toastTransferenciaEfetuadaComSucesso();
        this.resetTransferencia();
        this.carregando = false;
      },
      (r) => {
        if (r.error.mensagem) this.toastErroTransferencia(r.error.mensagem);
        else this.toastErroTransferencia('Erro ao efetuar transferência!');
        this.resetTransferencia();
        this.carregando = false;
      }
    );
  }

  setContaDestino(contaDestino: IContaDestino): void {
    this.transferencia.contaDestino.id = contaDestino.id;
    this.transferencia.contaDestino.tipo = contaDestino.tipo;
    this.transferencia.contaDestino.cliente.nome = contaDestino.cliente.nome;
  }

  resetContaDestino() {
    this.transferencia.contaDestino.tipo = null;
    this.transferencia.contaDestino.cliente.nome = '';
  }

  resetTransferencia() {
    this.resetContaDestino();
    this.transferencia.contaDestino.id = null;
    this.transferencia.valor = 0;
  }

  toastTransferenciaEfetuadaComSucesso() {
    this.toast.success('Transferência efetuado com sucesso!');
  }

  toastErroTransferencia(mensagem: string) {
    this.toast.error(mensagem);
  }
}
