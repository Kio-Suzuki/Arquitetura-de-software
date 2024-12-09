function calcularMedia(valores) {
  const somaTotal = somaTotaldosValores(valores);
  const quantidadeValores = valores.length;
  return (somaTotal / quantidadeValores).toFixed(2);
}

function somaTotaldosValores(valores) {
  return valores.reduce((soma, valor) => soma + valor, 0);
}

// Na função calcularMedia, utilizei a extração de variável, deixando bem claro o valor que será armazenada em cada uma delas.
// Como são operações simples apliquei também o método em linha.
// ps. Quando estava tentando refatorar a função calcularDesvioPadrao, percebi que havia uma etapa onde era somado todos os valores,
// então achei interessante criar uma função para isso, para que pudesse ser reutilizada nela.


function calcularDesvioPadrao(valores) {
  const media = calcularMedia(valores);
  const diferencasQuadradas = calcularDiferencasQuadradas(valores, media)
  const somaDiferencasQuadradas = somaTotaldosValores(diferencasQuadradas);
  return Math.sqrt(somaDiferencasQuadradas / valores.length).toFixed(2);
}

// Na função calcularDesvioPadrao, utilizei a extração de variável,método de extração e em linha,
// Segui praticamente o que já ocorria no cálculo inicial da média.
// Passei a operação de calcular a diferença quadrada entre cada valor do array e a média para outra função.

function calcularDiferencasQuadradas(valores, media) {
  return valores.map(valor => (valor - media) ** 2)
}

let valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));



