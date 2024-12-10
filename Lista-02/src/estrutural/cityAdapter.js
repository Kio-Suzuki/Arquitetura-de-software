import fs from 'fs';

export default class CityAdapter {
  lerArquivo(caminho) {
    return fs.readFileSync(caminho); 
  }

  converterDados(dados) {
    this.cidades = JSON.parse(dados);
  }

  obterCidades(caminho) {
    const dadosBrutos = this.lerArquivo(caminho); 
    this.converterDados(dadosBrutos); 
  }

  getCidades() {
    return this.cidades;
  }
}
