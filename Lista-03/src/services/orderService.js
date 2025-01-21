const Order = require('../models/order');
const saveData = require('../utils/saveData');
const path = './src/data/orders.json';
const Session = require('../utils/session');
const ProductService = require('./productService');

class OrderService {
  constructor() {
    this.orders = saveData.readJSON(path);

    this.currentId =
      this.orders.length > 0
        ? Math.max(...this.orders.map((p) => p.id)) + 1
        : 1;
  }

  createOrder(user, product, quantity) {
    const order = new Order(user, product, quantity);

    const stockService = new ProductService();

    const productName = stockService.verifyStock(product);

    if (!productName) {
      console.log('Product not found!');
      return null;
    }

    if (productName.quantity < quantity) {
      console.log('Insufficient quantity!');
      return null;
    }

    order.id = this.currentId++;
    stockService.removeProduct(productName.id, quantity);
    this.orders.push(order);
    saveData.writeJSON(path, this.orders);
    console.log(`Order ${order.id} created successfully!`);
    return order;
  }

  addProduct(user, product, quantity) {
    if (!Session.loggedIn() || Session.getUser() !== user) {
      console.log('Please Sign In First!');
    }

    let order = this.orders.find((o) => o.user === user);

    if (order) {
      const existingProduct = order.items.find((i) => i.product === product);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        order.products.push({ product, quantity });
      }
    }
    saveData.writeJSON(path, this.orders);
    console.log('Product added successfully!');
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

module.exports = OrderService;
