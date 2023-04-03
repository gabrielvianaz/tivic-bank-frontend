import { IClientePJ } from './../models/IClientePJ';
import { API_CONFIG } from './../config/api.config';
import { IClientePF } from './../models/IClientePF';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  cadastrarPF(cliente: IClientePF) {
    return this.http.post(`${API_CONFIG.baseUrl}/clientes/pf`, cliente, {
      observe: 'response',
      responseType: 'json',
    });
  }

  cadastrarPJ(cliente: IClientePJ) {
    return this.http.post(`${API_CONFIG.baseUrl}/clientes/pj`, cliente, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
