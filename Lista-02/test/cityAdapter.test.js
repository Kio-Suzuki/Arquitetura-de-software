import CityAdapter from '../src/estrutural/cityAdapter.js';

test('CityAdapter vai ler um json e precisa converter para objeto', async() => {
  const adapter = new CityAdapter();
  await adapter.obterCidades('./data/cidades-3.json');
  const cidades = adapter.getCidades();
  expect(cidades).toEqual(
    [
      { ID: '1', Nome: 'Afonso Cláudio', Estado: '8' },
      { ID: '2', Nome: 'Água Doce do Norte', Estado: '8' }
    ]
  )
});