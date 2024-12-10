export default class HTMLStrategy {
  format(cities) {
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

    for (let i = 0; i < cities.length; i++) {
      result += '     <li>' + cities[i]['Nome'] + '</li>\n';
    }

    result += `
          </ul>
        </body>
      </html>
    `;

    return result;
  }
}