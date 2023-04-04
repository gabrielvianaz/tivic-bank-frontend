export function formatarData(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

export function todosCamposPreenchidos(obj: any): boolean {
  for (const prop in obj) {
    if (!obj[prop]) {
      return false;
    }
  }
  return true;
}

export function emailValido(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function cpfValido(cpf: string): boolean {
  const cpfRegex = /^\d{3}(\.?\d{3}){2}-?\d{2}$/;
  return cpfRegex.test(cpf);
}

export function cnpjValido(cnpj: string): boolean {
  const cnpjRegex = /^\d{2}(\.?\d{3}){2}\/?\d{4}-?\d{2}$/;
  return cnpjRegex.test(cnpj);
}

export function formatarParaReal(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
