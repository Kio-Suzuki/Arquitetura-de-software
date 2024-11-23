const Contato = require('./contato/contato');
const GerenciadorContato = require('./contato/gerenciador-contatos');
const GerenciadorContatoValidacao = require('./contato/gerenciadorValidacao-contatos');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gerenciador = new GerenciadorContato();
const listaContatos = new GerenciadorContatoValidacao(gerenciador);


function mostrarMenu() {
  console.log('MENU');
  console.log('1 - Adicionar contato');
  console.log('2 - Remover contato');
  console.log('3 - Listar contatos');
  console.log('4 - Sair');
}

function Cli() {
  mostrarMenu();
  rl.question('Digite uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        rl.question('Digite o nome do contato: ', (nome) => {
          rl.question('Digite o telefone do contato: ', (telefone) => {
            rl.question('Digite o email do contato: ', (email) => {
              try {
                const novoContato = new Contato(nome, telefone, email);
                listaContatos.adicionarContato(novoContato);
              } catch (error) {
                console.error(error.message);
              }
              Cli(); 
            });
          });
        });
        break;
        case '2':
          rl.question('Digite o nome do contato: ', (nome) => {
            listaContatos.removerContato(nome);
            Cli(); 
          });
          break;
      case '3':
        console.log(listaContatos.listarContatos());
        if (listaContatos.listarContatos().length === 0) 
          console.log('Nenhum contato cadastrado!');
        Cli(); 
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opção inválida');
        Cli(); 
        break;
    }
  });
}



Cli();