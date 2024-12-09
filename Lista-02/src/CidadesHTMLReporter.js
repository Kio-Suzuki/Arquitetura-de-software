import * as fs from 'node:fs';

export default class CidadesHTMLReport {

  ler (caminho) {
    this.cidades = fs.readFileSync(caminho);
  }

  parse () {
    this.cidades = JSON.parse(this.cidades);
  }

  reportar() {
    let result = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
      <ul>
  `;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '     <li>' + this.cidades[i]['Nome'] + '</li>\n';
    }

    result += `
      </ul>
    </body>
  </html>`;

    return result;
  }
}
