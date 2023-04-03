import { ICredenciais } from './../../models/ICredenciais';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private toast: ToastrService,
    private loginService: LoginService,
    private router: Router
  ) {}

  credenciais: ICredenciais = {
    email: '',
    senha: '',
  };

  login() {
    this.loginService.login(this.credenciais).subscribe(
      (r) => this.logadoComSucesso(`Bearer ${r.body}`),
      () => this.falhaNoLogin()
    );
  }
  logadoComSucesso(token: string) {
    localStorage.setItem('token', token);
    this.router.navigate(['/home']);
  }

  falhaNoLogin() {
    this.toast.error('Usuário e/ou senha inválidos!');
  }
}
