import CityAdapter from '../src/estrutural/cityAdapter.js';
import fs from 'fs';
import { jest } from '@jest/globals';

jest.mock('fs');

test('CityAdapter vai ler e converter um json', () => {
  const mockData = JSON.stringify([{ Nome: 'Londrina' }]);
  jest.spyOn(fs, 'readFileSync').mockReturnValue(mockData);

  const adapter = new CityAdapter();
  adapter.obterCidades('cidades.json');

  const expected = [{ Nome: 'Londrina' }];
  expect(adapter.getCidades()).toEqual(expected);
});