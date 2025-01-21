class Order {
  constructor(user, products, quantity, id = null) {
    this.id = id;
    this.user = user;
    this.products = products;
    this.quantity = quantity;
  }
}

module.exports = Order;