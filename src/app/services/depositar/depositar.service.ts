import { IDeposito } from '../../models/depositar/IDeposito';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class DepositarService {
  constructor(private http: HttpClient) {}

  depositar(deposito: IDeposito) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/operacoes/depositar`,
      deposito
    );
  }
}
