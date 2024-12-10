## Atividades
<p>
  <a href="#at01">Atividade 01</a></br>
  <a href="#at02">Atividade 02</a></br>
  <a href="#at03">Atividade 03</a></br>
  <a href="#at04">Atividade 04</a></br>
  <a href="#at05">Atividade 05</a></br>
</p>

## Listas
<p>
  <a href="#li01">Lista 01</a></br>
  <a href="#li02">Lista 02</a></br>
</p>

<h2 id="at01" style="font-weight: bold;">📝 Atividade 01</h2>

![Diagrama de classes](./Atividade-01/Diagrama.png)

1. Gere um projeto Node.js com o comando npm init.
2. Implemente as classes conforme o diagrama apresentado
3. Utilize módulos para organizar suas classes em um projeto Node.js

***
</br>

<h2 id="at02" style="font-weight: bold;">📝 Atividade 02</h2>

<h3 style="font-weight: bold;">1. Descrição do Problema</h3>

Imagine que você está desenvolvendo um sistema de reserva de viagens online. Este sistema possui várias partes complexas, como reserva de voos, reserva de hotéis e aluguel de carros. Cada uma dessas partes possui sua própria lógica e interações com serviços externos.

Para simplificar a interação do cliente com o sistema, você decidiu usar o padrão de design Facade. Sua tarefa é criar uma classe TravelFacade que irá fornecer uma interface simplificada para o cliente, encapsulando toda a complexidade do processo de reserva de viagens.

<h3 style="font-weight: bold;">Solução</h3>

1. Modele as diferentes partes do sistema de reserva de viagens (reserva de voos, reserva de hotéis, aluguel de carros, etc.).
2. Implemente as classes necessárias para cada uma dessas partes.
3. Crie a classe TravelFacade que irá encapsular a interação com todas as partes do sistema.
4. Teste o sistema, mostrando como um cliente pode usar a TravelFacade para fazer uma reserva de viagem completa de forma simples, sem precisar conhecer os detalhes internos do sistema.

<h3 style="font-weight: bold;">2. Crie um exemplo de modelagem que represente a diferença entre os padrões comportamentais State e Strategy (utilize UML)</h3>

***
</br>

<h2 id="at03" style="font-weight: bold;">📝 Atividade 03</h2>

<h3 style="font-weight: bold;">1. Descrição do Problema</h3>

Você está desenvolvendo um sistema para representar a estrutura de uma organização. A organização possui uma hierarquia de funcionários, onde cada funcionário pode ser um indivíduo ou um departamento. Cada departamento pode conter mais funcionários ou subdepartamentos.

Você precisa criar uma estrutura que permita representar essa hierarquia de funcionários e departamentos de forma hierárquica e também permita realizar operações em toda a estrutura, independentemente de ser um funcionário individual ou um departamento com mais funcionários.

<h3 style="font-weight: bold;">Tarefas</h3>

1. Modele a estrutura de funcionários e departamentos usando o padrão de design Composite.
2. Implemente classes que representem funcionários individuais e departamentos.
3. Crie métodos para adicionar/remover funcionários ou subdepartamentos em um departamento.
4. Implemente um método que permita calcular o salário total de toda a organização, percorrendo recursivamente a estrutura hierárquica.
5. Teste a sua implementação, mostrando como você pode adicionar funcionários e departamentos, calcular o salário total e realizar outras operações na estrutura.

***
</br>

<h2 id="at04" style="font-weight: bold;">📝 Atividade 04</h2>

<h3 style="font-weight: bold;">Exercício 1</h3>

Refatore o seguinte trecho de código JS para torná-lo mais legível e eficiente. Além disso, aplique o princípio "Replace Temp with Query":

```javascript
function calculateTotalPrice(products) {
    let total = 0;
    let discount = 0.1;
    let shippingCost = 5;

    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }

    if (total > 100) {
        total *= (1 - discount);
    }

    if (total < 50) {
        total += shippingCost;
    }

    return total.toFixed(2);
}
```
Você deve refatorar o código acima, removendo as variáveis temporárias total, discount, e shippingCost, substituindo-as por consultas diretas. Certifique-se de manter a funcionalidade original do código.

<h3 style="font-weight: bold;">Exercício 2</h3>

Você foi designado para revisar e refatorar um código legado que realiza cálculos de estatísticas de uma empresa. O código original é funcional, mas está difícil de entender e manter. Sua tarefa é refatorar o código, aplicando pelo menos três técnicas de refatoração para torná-lo mais legível, eficiente e fácil de dar manutenção.

```javascript
function calcularMedia(valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
    let media = soma / valores.length;
    return media.toFixed(2);
}

function calcularDesvioPadrao(valores) {
    let media = calcularMedia(valores);
    let somaDiferencasQuadradas = 0;
    for (let i = 0; i < valores.length; i++) {
        somaDiferencasQuadradas += (valores[i] - media) ** 2;
    }
    let desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
    return desvioPadrao.toFixed(2);
}

let valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));
```
Instruções:

1. Refatore o código original, aplicando pelo menos três técnicas de refatoração diferentes (Método de extração, Método em linha, Extração de variável, Divisão de variável temporária, Remoção de atribuições a parâmetros) .
2. Mantenha a funcionalidade do código original.
3. Você pode adicionar funções auxiliares, renomear variáveis e simplificar a lógica, se necessário.
4. Comente suas alterações explicando as técnicas de refatoração que foram aplicadas e por que elas melhoram o código.

***
</br>

<h2 id="at05" style="font-weight: bold;">📝 Atividade 05</h2>

Criar um ambiente de desenvolvimento local que implemente o padrão MVC (Model-View-Controller).

**Instruções**

Parte 1: Configuração do Ambiente para MVC

**1. Escolha um framework MVC:**

- Node.js com Express: Um framework leve e flexível para criar aplicações web.
- Django (Python): Framework robusto com suporte nativo a MVC.
- Spring Boot (Java): Para aplicações mais estruturadas em Java.
- Ruby on Rails: Simples e ideal para protótipos rápidos.

**2. Passo a Passo:**

- Instale as dependências do framework escolhido.
- Node.js: npm init -y seguido de npm install express.
- Django: pip install django.
- Spring Boot: Configure um projeto com Spring Initializr.

- Configure uma estrutura básica de diretórios

```bash
/project-root
├── /models
├── /views
├── /controllers
├── /routes (opcional para frameworks com roteamento separado)
├── server/app.py|.js|.java (arquivo principal)
```

**Implemente uma funcionalidade básica:**

1. Crie uma página inicial (/) que exiba uma mensagem "Ambiente configurado".
2. Configure um modelo simples para navegar um parâmetro que, por meio de um controlador, passe por alguma transformação lógica.

***
</br>

<h2 id="li01" style="font-weight: bold;">📌 Lista 01</h2>

**Objetivo:** Deve-se aplicar padrões de projeto em JavaScript, tanto estruturais quanto comportamentais em um contexto prático.

**Problema:** Você foi contratado para desenvolver um sistema de gerenciamento de contatos em JavaScript. O sistema deve permitir aos usuários adicionar, remover e listar contatos. Além disso, eles devem ser capazes de buscar contatos por nome.

**Requisitos Iniciais:**

1. Implemente uma classe Contato que represente um contato com os seguintes atributos: nome, telefone e email.
2. Implemente uma classe GerenciadorContatos que possua métodos para adicionar, remover e listar contatos. Este gerenciador deve manter uma lista de contatos.
3. Implemente uma interface simples de linha de comando (CLI) que permita aos usuários interagirem com o sistema (adicionar, remover, listar e buscar contatos).
4. Utilize um padrão de projeto estrutural para garantir que a adição e remoção de contatos possam ser facilmente estendidas no futuro, sem modificar o código existente.
5. Utilize um padrão de projeto comportamental para implementar a funcionalidade de busca de contatos, garantindo que esta possa variar independentemente dos algoritmos de busca.

**Instruções Adicionais:**

- Você pode escolher qualquer padrão de projeto estrutural e comportamental para implementar os requisitos.
- Documente o seu código de forma clara, explicando a escolha dos padrões de projeto utilizados.
- Siga as melhores práticas de desenvolvimento JavaScript e padrões de codificação.
- Teste o seu sistema para garantir que ele atende aos requisitos especificados.

***
</br>

<h2 id="li02" style="font-weight: bold;">📌 Lista 02</h2>

**Design Patterns aplicada com refatoração**

Com base no sistema abaixo:  

[GitHub](https://github.com/watinha/es46a-2023-2/tree/strategy/01-design-patterns-template-strategy)

Aplicar um padrão de projeto criacional, estrutural e um comportamental. Justifique o porque das escolhas em documentação que aponte, ainda, tres refatorações (use os princípios SOLID). Deve ser construido um script de teste, que garanta a consistencia das saídas esperadas após as alterações.
