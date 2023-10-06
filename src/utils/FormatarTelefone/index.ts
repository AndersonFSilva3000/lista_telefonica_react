export const FormatarTelefone = (valor: string) => {
  const numeroLimpo = valor.replace(/\D/g, '');

  const numeroFormatado = numeroLimpo.replace(
    /^(\d{2})(\d{5})(\d{4}).*/,
    '($1) $2-$3'
  );

  return numeroFormatado;
};