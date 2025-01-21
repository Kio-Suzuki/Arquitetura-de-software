const AuthService = require('./src/services/authService')
const ProductService = require('./src/services/productService');
const OrderService = require('./src/services/orderService');
const Session = require('./src/utils/session');

const auth = new AuthService();
const product = new ProductService();
const order = new OrderService();

// auth.createUser('kio', 'abc123');

auth.login('kio', 'abc123');

// product.addNewProduct('Notebook', 3000, 5);
// product.addNewProduct('Smartphone', 1500, 10);
// product.addNewProduct('Keyboard', 200, 20);
// product.addNewProduct('Mouse', 149, 50);
// product.addNewProduct('Monitor', 899, 10);
// product.addNewProduct('Headphones', 199, 25);
// product.addNewProduct('Mousepad', 99, 100);
// product.addNewProduct('Webcam', 149, 30);

// const editProduct = { price: 249}

// const updatedProduct = product.editProduct(3, editProduct);


product.listProducts();

product.removeProduct(3, 5);

product.addProduct(2, 10);

product.listProducts();

console.log(product.verifyStock('Smartphone'));

if(Session.loggedIn()) {
  order.createOrder(Session.getUser(), 'Notebook', 3);
} else {
  console.log('Please Sign In First!');
}
