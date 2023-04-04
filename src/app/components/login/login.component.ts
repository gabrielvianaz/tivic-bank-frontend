import { ICredenciais } from './../../models/ICredenciais';
import { LoginService } from './../../services/login.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { emailValido } from 'src/app/util/app.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private toast: ToastrService,
    private loginService: LoginService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  credenciais: ICredenciais = {
    email: '',
    senha: '',
  };

  loading = false;

  login() {
    if (emailValido(this.credenciais.email)) {
      this.loading = true;
      this.cdr.detectChanges();
      this.loginService.login(this.credenciais).subscribe(
        (r) => {
          this.handleLoginComSucesso(`Bearer ${r.body}`);
          this.loading = false;
        },
        () => {
          this.toastFalhaNoLogin();
          this.loading = false;
        }
      );
    } else this.toastEmailInvalido();
  }

  handleLoginComSucesso(token: string) {
    localStorage.setItem('token', token);
    this.router.navigate(['/']);
  }

  toastEmailInvalido() {
    this.toast.error('O e-mail informado é inválido!');
  }

  toastFalhaNoLogin() {
    this.toast.error('E-mail e/ou senha inválidos!');
  }
}
