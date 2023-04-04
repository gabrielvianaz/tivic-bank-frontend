export interface IDadosConta {
  id: number | null;
  cliente: {
    nome: string | null;
  };
  saldo: number | null;
}
