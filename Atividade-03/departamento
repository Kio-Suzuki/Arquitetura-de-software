const Organizacao = require('./organizacao');

class Departamento extends Organizacao{
  constructor(nome) {
    super();
    this.nome = nome;
    this.integrantes = [];
  }

  adicionar(funcionario) {
    this.integrantes.push(funcionario);
  }

  remover(funcionario) {
    const index = this.integrantes.indexOf(funcionario);
    if(index !== -1) {
      this.integrantes.splice(index, 1);
    }
  }

  calcularSalario() {
    return this.integrantes.reduce((total, funcionario) => {
      return total + funcionario.calcularSalario();
    }, 0);
  }

}

module.exports = Departamento;