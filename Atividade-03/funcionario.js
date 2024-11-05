const Organizacao = require("./organizacao");

class Funcionario extends Organizacao{
  constructor(nome, salario) {
    super();
    this.nome = nome;
    this.salario = salario;
  }
  calcularSalario() {
    return this.salario;
  }
}

module.exports = Funcionario;