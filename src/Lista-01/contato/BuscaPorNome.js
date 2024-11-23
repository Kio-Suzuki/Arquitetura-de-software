const BuscaStrategy = require('./BuscaStrategy');

class BuscaPorNome extends BuscaStrategy {
  buscar(contatos, termo) {
    return contatos.filter(contato => contato.getNome().toLowerCase() === termo.toLowerCase());
  }
}
module.exports = BuscaPorNome;
