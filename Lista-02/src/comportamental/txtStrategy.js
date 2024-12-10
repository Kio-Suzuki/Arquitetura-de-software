export default class TxtStrategy {
  format(cities) {
    let result = `Relatório de Nomes de Cidades
=============================\n`;

    for (let i = 0; i < cities.length; i++) {
      result += '* ' + cities[i]['Nome'] + '\n';
    }

    return result;
  }
}