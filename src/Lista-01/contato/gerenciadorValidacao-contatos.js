const Contato = require('./contato');
const isEmail = require('validator/lib/isEmail');

class GerenciadorContatoValidacao {
  constructor(gerenciador) {
    this.gerenciador = gerenciador;
  }

  adicionarContato(contato) {
    try {
      this.validaContato(contato);
      this.gerenciador.adicionarContato(contato);
      console.log('Contato adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar contato:', error.message);
    }
  }
  
  removerContato(nome) {
    this.gerenciador.removerContato(nome);
  }

  listarContatos() {
    return this.gerenciador.listarContatos();
  }

  validaContato(contato) {
    const { nome, telefone, email } = contato;
    if (!nome || !telefone || !email) {
      throw new Error('Todos os campos são obrigatórios');
    }
    if (nome.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    }
    if (telefone.length < 8) {
      throw new Error('O telefone deve ter no mínimo 8 números');
    }
    if (!isEmail(email)) {
      throw new Error('O Email é inválido');
    }
  }
}

module.exports = GerenciadorContatoValidacao;