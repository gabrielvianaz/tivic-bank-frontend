import { ICredenciais } from '../../models/login/ICredenciais';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { emailValido } from 'src/app/util/app.utils';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private toast: ToastrService,
    private loginService: LoginService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  credenciais: ICredenciais = {
    email: '',
    senha: '',
  };

  carregando = false;

  login() {
    if (emailValido(this.credenciais.email)) {
      this.carregando = true;
      this.cdr.detectChanges();
      this.loginService.login(this.credenciais).subscribe(
        (r) => {
          this.handleLoginComSucesso(`Bearer ${r.body}`);
          this.carregando = false;
        },
        () => {
          this.toastFalhaNoLogin();
          this.carregando = false;
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
