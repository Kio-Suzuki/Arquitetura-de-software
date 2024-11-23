const Contato = require('./contato/contato');
const GerenciadorContato = require('./contato/gerenciador-contatos');
const BuscaPorNome = require('./contato/BuscaPorNome');
const BuscaPorTelefone = require('./contato/BuscaPorTelefone');
const BuscaPorEmail = require('./contato/BuscaPorEmail');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gerenciador = new GerenciadorContato();

function mostrarMenu() {
  console.log('MENU');
  console.log('1 - Adicionar contato');
  console.log('2 - Remover contato');
  console.log('3 - Listar contatos');
  console.log('4 - Buscar contato');
  console.log('5 - Sair');
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
                gerenciador.adicionarContato(novoContato);
                console.log('Contato adicionado com sucesso!');
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
          gerenciador.removerContato(nome);
          Cli();
        });
        break;
      case '3':
        console.log(gerenciador.listarContatos());
        if (gerenciador.listarContatos().length === 0)
          console.log('Nenhum contato cadastrado!');
        Cli();
        break;
      case '4':
        menuBuscar();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opção inválida');
        Cli();
        break;
    }
  });

  function menuBuscar(){
    rl.question('Digite o tipo de busca (nome, telefone, email): ', (estrategia) => {
      rl.question('Digite o Termo: ', (termo) => {
        
        let buscaStrategy;
        switch (estrategia) {
          case 'nome':
            buscaStrategy = new BuscaPorNome();
            break;
          case 'telefone':
            buscaStrategy = new BuscaPorTelefone();
            break;
          case 'email':
            buscaStrategy = new BuscaPorEmail();
            break;
          default:
            console.log('Estratégia inválida');
            Cli();
            return;
        }
        gerenciador.setBuscaStrategy(buscaStrategy);
        const resultados = gerenciador.buscarContatos(termo);
        if (resultados.length > 0) {
          console.log('Resultados da busca:', resultados);
        } else {
          console.log('Nenhum contato encontrado!');
        }
        Cli();
      });
    });

  }

}

Cli();
