import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  constructor(private http: HttpClient) {}

  getExtrato(pagina: number) {
    return this.http.get(
      `${API_CONFIG.baseUrl}/conta/operacoes?page=${pagina}`,
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }
}
