class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone
    this.email = email;
  }

  getNome() {
    return this.nome.toLowerCase();
  }
};

module.exports = Contato;