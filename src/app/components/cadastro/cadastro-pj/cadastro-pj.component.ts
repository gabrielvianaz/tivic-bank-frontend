import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IClientePJ } from 'src/app/models/cadastro/IClientePJ';
import { CadastroService } from 'src/app/services/cadastro/cadastro.service';
import { LoginService } from 'src/app/services/login/login.service';
import {
  cnpjValido,
  emailValido,
  formatarData,
  todosCamposPreenchidos,
} from 'src/app/util/app.utils';

@Component({
  selector: 'app-cadastro-pj',
  templateUrl: './cadastro-pj.component.html',
  styleUrls: ['./cadastro-pj.component.css'],
})
export class CadastroPjComponent {
  constructor(
    private toast: ToastrService,
    private cadastroService: CadastroService,
    private loginService: LoginService,
    private router: Router
  ) {}

  cliente: IClientePJ = {
    email: '',
    senha: '',
    telefone: '',
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    dataFundacao: '',
  };

  confirmacaoSenha = '';

  cadastrar() {
    if (this.todosCamposValidos()) {
      this.cadastroService
        .cadastrarPJ({
          ...this.cliente,
          dataFundacao: formatarData(this.cliente.dataFundacao),
        })
        .subscribe(
          () => {
            this.loginService
              .login({
                email: this.cliente.email,
                senha: this.cliente.senha,
              })
              .subscribe((r) => {
                localStorage.setItem('token', `Bearer ${r.body}`);
                this.router.navigate(['/']);
              });
          },
          (r) => {
            r.error.mensagem
              ? this.toastErroCadastro(r.error.mensagem)
              : this.toastErroCadastro('Erro ao tentar realizar cadastro!');
          }
        );
    }
  }

  todosCamposPreenchidos() {
    return todosCamposPreenchidos(this.cliente);
  }

  todosCamposValidos() {
    if (this.cliente.senha != this.confirmacaoSenha) {
      this.toastSenhasNaoConferem();
      return false;
    } else if (!emailValido(this.cliente.email)) {
      this.toastEmailInvalido();
      return false;
    } else if (!cnpjValido(this.cliente.cnpj)) {
      this.toastCnpjInvalido();
      return false;
    }
    return true;
  }

  toastSenhasNaoConferem() {
    this.toast.error('As senhas digitadas não conferem!');
  }

  toastEmailInvalido() {
    this.toast.error('O e-mail informado é inválido!');
  }

  toastCnpjInvalido() {
    this.toast.error('O CNPJ informado é inválido!');
  }

  toastErroCadastro(mensagem: string) {
    this.toast.error(mensagem);
  }
}
