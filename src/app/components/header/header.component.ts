import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logoff() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  estaLogado() {
    return localStorage.getItem('token') != null;
  }
}
