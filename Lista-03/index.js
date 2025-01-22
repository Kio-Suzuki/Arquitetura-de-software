const AuthService = require('./src/services/authService')
const ProductService = require('./src/services/productService');
const OrderService = require('./src/services/orderService');
const PaymentService = require('./src/services/paymentService');
const Session = require('./src/utils/session');

const auth = new AuthService();
const product = new ProductService();
const order = new OrderService();
const pay = new PaymentService();

// Cadastro de usuários

auth.createUser('user', 'abc123');

// Sign In

auth.login('user', 'abc123');

// Adicionando produtos ao estoque

// product.addNewProduct('Motherboard', 1500, 50);
// product.addNewProduct('GPU', 5000, 20);
// product.addNewProduct('Power Supply', 900, 80);
// product.addNewProduct('SSD', 399, 100);
// product.addNewProduct('Memory RAM', 359, 200);
// product.addNewProduct('Water Cooler', 329, 25);
// product.addNewProduct('Monitor', 899, 50);
// product.addNewProduct('Keyboard', 249, 80);
// product.addNewProduct('Mouse', 229, 80);
// product.addNewProduct('Headset', 299, 100);

// Conferindo estoque

// product.listProducts();

// Alterando estoque

// product.addProduct(1, 10);

// product.listProducts();

// Adicionando produtos ao carrinho

// order.addCart('Keyboard', 12);
// order.addCart('Monitor', 3);

// Criando um pedido

// if(Session.loggedIn()) {
//   order.createOrder(Session.getUser());
// } else {
//   console.log('Please Sign In First!');
// }

// Realizando pagamento

// pay.payment(1);

