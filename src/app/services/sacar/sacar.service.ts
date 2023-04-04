import { API_CONFIG } from '../../config/api.config';
import { ISaque } from '../../models/sacar/ISaque';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SacarService {
  constructor(private http: HttpClient) {}

  sacar(saque: ISaque) {
    return this.http.post(`${API_CONFIG.baseUrl}/operacoes/sacar`, saque);
  }
}
