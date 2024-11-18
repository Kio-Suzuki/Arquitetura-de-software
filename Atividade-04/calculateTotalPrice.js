function discount(total) {
  return total > 100 ? 0.9 : 1;
}

function shippingCost(total) {
  return total < 50 ? 5 : 0;
}

function calculateTotalPrice(products) {
  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  return total * discount(total) + shippingCost(total);
}

console.log(calculateTotalPrice([
  { price: 10, quantity: 1 },
  { price: 50, quantity: 2 },
  { price: 5, quantity: 3 },
]));

// Refatore o seguinte trecho de código JS para torná-lo mais legível e eficiente. 
// Além disso, aplique o princípio "Replace Temp with Query":
// Você deve refatorar o código acima, removendo as variáveis temporárias total, discount, e shippingCost, 
// substituindo-as por consultas diretas. Certifique-se de manter a funcionalidade original do código.

