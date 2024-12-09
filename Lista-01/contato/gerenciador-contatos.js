const Contato = require('./contato');
const BuscaStrategy = require('./BuscaStrategy');

class GerenciadorContato {
  constructor() {
    this.contatos = [];
    this.buscaStrategy = null;
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
  }

  removerContato(nome) {
    const index = this.contatos.findIndex(contato => contato.getNome() === nome.toLowerCase());
    if (index > -1) {
      this.contatos.splice(index, 1);
      console.log('Contato removido com sucesso!');
    } else {
      console.log('Contato não encontrado!');
    }
  }

  listarContatos() {
    return this.contatos;
  }
  setBuscaStrategy(buscaStrategy) {
    this.buscaStrategy = buscaStrategy;
  }

  buscarContatos(termo) {
    if (this.buscaStrategy === null) {
      throw new Error("Estratégia de busca não definida");
    }
    return this.buscaStrategy.buscar(this.contatos, termo);
  }
}

module.exports = GerenciadorContato;
