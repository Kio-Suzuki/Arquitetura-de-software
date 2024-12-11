import TxtStrategy from "../src/comportamental/txtStrategy";

test('Deve formatar a lista de cidades em texto', () => {
  const formatter = new TxtStrategy();
  const cities = [{ Nome: 'Londrina'}];
  const expected = `Relatório de Nomes de Cidades\n=============================\n* Londrina\n`;
  expect(formatter.format(cities)).toBe(expected);
})