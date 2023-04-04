import { API_CONFIG } from '../../config/api.config';
import { ICredenciais } from '../../models/login/ICredenciais';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(credenciais: ICredenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, credenciais, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
