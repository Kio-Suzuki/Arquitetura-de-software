import CityFactory from '../src/criacional/cityFactory.js';
import TxtStrategy from '../src/comportamental/txtStrategy.js';

test('Deve retornar a lista de cidades usando o formatador escolhido', async() => {
  const formatter = new TxtStrategy();
  const factory = new CityFactory(formatter);
  const cities = [{ Nome: 'Londrina'  }];
  const expected = `Relatório de Nomes de Cidades\n=============================\n* Londrina\n`;
  expect(factory.createCityReporter(cities)).toBe(expected);
});

