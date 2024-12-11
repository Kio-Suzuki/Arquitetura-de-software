import CityAdapter from '../src/estrutural/cityAdapter.js';
import cityFactory from '../src/criacional/cityFactory.js';
import TxtStrategy from '../src/comportamental/txtStrategy.js';

test('CityAdapter vai ler um json e precisa converter para objeto', async() => {
  const adapter = new CityAdapter();
  await adapter.obterCidades('./data/cidades-3.json');
  const cidades = adapter.getCidades();

  const txtFormatter = new TxtStrategy();
  const cityFactory = new CityFactory(txtFormatter);
  const report = cityFactory.createCityReporter(cidades);
  expect(report).toEqual(
    `Relatório de Nomes de Cidades
    =============================\n`

  )
});

