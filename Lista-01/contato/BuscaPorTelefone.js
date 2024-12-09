const BuscaStrategy = require('./BuscaStrategy');

class BuscaPorTelefone extends BuscaStrategy {
  buscar(contatos, termo) {
    return contatos.filter(contato => contato.telefone === termo);
  }
}

module.exports = BuscaPorTelefone;
