export interface IOperacao {
  id: number;
  momento: string;
  valor: number;
  contaOrigem: {
    cliente: {
      nome: string | undefined;
    };
  };
  contaDestino: {
    cliente: {
      nome: string | undefined;
    };
  };
}
