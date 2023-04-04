export interface IContaDestino {
  tipo: 'PF' | 'PJ' | null;
  id: number | null;
  cliente: {
    nome: string;
  };
}
