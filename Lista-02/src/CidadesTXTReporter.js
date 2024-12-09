import * as fs from 'node:fs';

export default class CidadesTXTReporter {

  ler (caminho) {
    this.cidades = fs.readFileSync(caminho);
  }

  parse () {
    this.cidades = JSON.parse(this.cidades);
  }

  reportar() {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '* ' + this.cidades[i]['Nome'] + '\n';
    }

    return result;
  }
}

