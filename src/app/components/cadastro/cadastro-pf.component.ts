import { Router } from '@angular/router';
import { ICredenciais } from './../../models/ICredenciais';
import { IClientePF } from './../../models/IClientePF';
import { CadastroService } from './../../services/cadastro.service';
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import {
  cpfValido,
  emailValido,
  formatarData,
  todosCamposPreenchidos,
} from 'src/app/util/app.utils';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadastro-pf',
  templateUrl: './cadastro-pf.component.html',
  styleUrls: ['./cadastro-pf.component.css'],
})
export class CadastroPfComponent {
  constructor(
    private toast: ToastrService,
    private cadastroService: CadastroService,
    private loginService: LoginService,
    private router: Router
  ) {}

  cliente: IClientePF = {
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    nome: '',
    dataNascimento: '',
  };

  confirmacaoSenha = '';

  cadastrar() {
    if (this.todosCamposValidos()) {
      this.cadastroService
        .cadastrarPF({
          ...this.cliente,
          dataNascimento: formatarData(this.cliente.dataNascimento),
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
                this.router.navigate(['/home']);
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
    } else if (!cpfValido(this.cliente.cpf)) {
      this.toastCpfInvalido();
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

  toastCpfInvalido() {
    this.toast.error('O CPF informado é inválido!');
  }

  toastErroCadastro(mensagem: string) {
    this.toast.error(mensagem);
  }
}
