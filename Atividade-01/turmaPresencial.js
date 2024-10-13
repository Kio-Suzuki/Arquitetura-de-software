const Turma = require('./turma');

class TurmaPresencial extends Turma {
  constructor(codigo, nota, presenca) {
    super(codigo, nota);
    this.presenca = presenca;
  }
  aprovado() {
    return super.aprovado();
  }
}

module.exports = TurmaPresencial;