const Contato = require('./contato');

class GerenciadorContato {
  constructor() {
    this.contatos = [];
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
}

module.exports = GerenciadorContato;