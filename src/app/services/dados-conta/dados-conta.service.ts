import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class DadosContaService {
  constructor(private http: HttpClient) {}

  getDadosConta() {
    return this.http.get(`${API_CONFIG.baseUrl}/conta`, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
