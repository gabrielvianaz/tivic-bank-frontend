import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem('token');
  }

  tipoCliente = 'pf';
}
