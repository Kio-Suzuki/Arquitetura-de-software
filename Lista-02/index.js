import CidadesHTMLReport from './src/CidadesHTMLReporter.js';
import CidadesTXTReport from './src/CidadesTXTReporter.js';

const [cmd, filename, format] = process.argv;


if (format === 'html') {
  let reporter = new CidadesHTMLReport();
  reporter.ler('./data/cidades-2.json');
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}
if (format === 'txt') {
  let reporter = new CidadesTXTReport();
  reporter.ler('./data/cidades-2.json');
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}
