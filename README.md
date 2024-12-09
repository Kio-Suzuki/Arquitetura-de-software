<p align="center">
  <a href="#at01">Atividade 01</a>
  <a href="#at02">Atividade 02</a>
  <a href="#at03">Atividade 03</a>
  <a href="#at04">Atividade 04</a>
</p>

<h2 id="at01" style="font-weight: bold;">Atividade 01</h2>

![Diagrama de classes](./Atividade-01/Diagrama.png)

1. Gere um projeto Node.js com o comando npm init.
2. Implemente as classes conforme o diagrama apresentado
3. Utilize módulos para organizar suas classes em um projeto Node.js

<h2 id="at02" style="font-weight: bold;">Atividade 02</h2>

<h3 style="font-weight: bold;">1. Descrição do Problema</h3>

Imagine que você está desenvolvendo um sistema de reserva de viagens online. Este sistema possui várias partes complexas, como reserva de voos, reserva de hotéis e aluguel de carros. Cada uma dessas partes possui sua própria lógica e interações com serviços externos.

Para simplificar a interação do cliente com o sistema, você decidiu usar o padrão de design Facade. Sua tarefa é criar uma classe TravelFacade que irá fornecer uma interface simplificada para o cliente, encapsulando toda a complexidade do processo de reserva de viagens.

<h3 style="font-weight: bold;">Solução</h3>

1. Modele as diferentes partes do sistema de reserva de viagens (reserva de voos, reserva de hotéis, aluguel de carros, etc.).
2. Implemente as classes necessárias para cada uma dessas partes.
3. Crie a classe TravelFacade que irá encapsular a interação com todas as partes do sistema.
4. Teste o sistema, mostrando como um cliente pode usar a TravelFacade para fazer uma reserva de viagem completa de forma simples, sem precisar conhecer os detalhes internos do sistema.

<h3 style="font-weight: bold;">2. Crie um exemplo de modelagem que represente a diferença entre os padrões comportamentais State e Strategy (utilize UML)</h3>

<h2 id="at03" style="font-weight: bold;">Atividade 03</h2>

<h3 style="font-weight: bold;">1. Descrição do Problema</h3>

Você está desenvolvendo um sistema para representar a estrutura de uma organização. A organização possui uma hierarquia de funcionários, onde cada funcionário pode ser um indivíduo ou um departamento. Cada departamento pode conter mais funcionários ou subdepartamentos.

Você precisa criar uma estrutura que permita representar essa hierarquia de funcionários e departamentos de forma hierárquica e também permita realizar operações em toda a estrutura, independentemente de ser um funcionário individual ou um departamento com mais funcionários.

<h3 style="font-weight: bold;">Tarefas</h3>

1. Modele a estrutura de funcionários e departamentos usando o padrão de design Composite.
2. Implemente classes que representem funcionários individuais e departamentos.
3. Crie métodos para adicionar/remover funcionários ou subdepartamentos em um departamento.
4. Implemente um método que permita calcular o salário total de toda a organização, percorrendo recursivamente a estrutura hierárquica.
5. Teste a sua implementação, mostrando como você pode adicionar funcionários e departamentos, calcular o salário total e realizar outras operações na estrutura.

<h2 id="at04" style="font-weight: bold;">Atividade 04</h2>

<h3 style="font-weight: bold;">Exercício 1</h3>

Refatore o seguinte trecho de código JS para torná-lo mais legível e eficiente. Além disso, aplique o princípio "Replace Temp with Query":

```bash
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

```bash
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

