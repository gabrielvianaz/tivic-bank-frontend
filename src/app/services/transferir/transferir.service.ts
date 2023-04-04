import { API_CONFIG } from './../../config/api.config';
import { ITransferencia } from './../../models/transferir/ITransferencia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferirService {
  constructor(private http: HttpClient) {}

  getContaDestino(id: number) {
    return this.http.get(`${API_CONFIG.baseUrl}/contas/${id}`, {
      observe: 'response',
      responseType: 'json',
    });
  }

  transferir(transferencia: ITransferencia) {
    return this.http.post(`${API_CONFIG.baseUrl}/operacoes/transferir`, {
      contaDestino: {
        tipo: transferencia.contaDestino.tipo,
        id: transferencia.contaDestino.id,
      },
      valor: transferencia.valor,
    });
  }
}
