const BuscaStrategy = require('./BuscaStrategy');

class BuscaPorEmail extends BuscaStrategy {
  buscar(contatos, termo) {
    return contatos.filter(contato => contato.email.toLowerCase() === termo.toLowerCase());
  }
}

module.exports = BuscaPorEmail;
