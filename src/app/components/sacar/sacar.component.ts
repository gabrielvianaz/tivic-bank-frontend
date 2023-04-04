import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ISaque } from 'src/app/models/sacar/ISaque';
import { SacarService } from 'src/app/services/sacar/sacar.service';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css'],
})
export class SacarComponent {
  constructor(
    private toast: ToastrService,
    private sacarService: SacarService
  ) {}

  saque: ISaque = {
    valor: 0,
  };

  carregando = false;

  sacar() {
    this.carregando = true;
    this.sacarService.sacar(this.saque).subscribe(
      () => {
        this.toastSaqueEfetuadoComSucesso();
        this.resetarValorSaque();
        this.carregando = false;
      },
      (r) => {
        if (r.error.mensagem) this.toastErroSaque(r.error.mensagem);
        else this.toastErroSaque('Erro ao efetuar saque!');
        this.resetarValorSaque();
        this.carregando = false;
      }
    );
  }

  resetarValorSaque() {
    this.saque.valor = 0;
  }

  toastSaqueEfetuadoComSucesso() {
    this.toast.success('Saque efetuado com sucesso!');
  }

  toastErroSaque(mensagem: string) {
    this.toast.error(mensagem);
  }
}
