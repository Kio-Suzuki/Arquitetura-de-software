const Order = require('../models/order');
const saveData = require('../utils/saveData');
const path = './src/data/orders.json';
const Session = require('../utils/session');
const ProductService = require('./productService');

class OrderService {
  constructor() {
    this.orders = saveData.readJSON(path);
    console.log(this.orders)
    this.cart = [];
    this.currentId =
      this.orders.length > 0
        ? Math.max(...this.orders.map((p) => p.id)) + 1
        : 1;
  }

  addCart(productName, quantity) {
    
    const stockService = new ProductService();
    const product = stockService.verifyStock(productName);

    if (!product) {
      console.log('Product not found!');
      return null;
    }

    if (product.quantity < quantity) {
      console.log('Insufficient quantity!');
      return null;
    }
    const existingProducts = this.cart.findIndex((productFind) => productFind.name === product.name);
    if(existingProducts !== -1){
      this.cart[existingProducts].quantity += quantity;
    }else{
      this.cart.push({...product, 'quantity': quantity})
    }
  }

  createOrder(user) {
    if(this.cart.length !== 0){
      const order = new Order(user, this.cart);
      order.id = this.currentId++;
      const total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      order.total = total
      const stockService = new ProductService();
      this.cart.forEach(item =>{
        stockService.removeProduct(item.id, item.quantity);
      })
      order.products = {...this.cart};
      this.orders.push(order);
      saveData.writeJSON(path, this.orders);
      console.log(`Order ${order.id} created successfully!`);
    }else{
      console.log("Cart empty!")
    }
  }
}

module.exports = OrderService;
