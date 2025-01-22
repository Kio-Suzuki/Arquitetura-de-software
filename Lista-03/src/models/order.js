class Order {
  constructor(user, products, quantity, id = null, status = 'pending', total) {
    this.id = id;
    this.user = user;
    this.products = products;
    this.quantity = quantity;
    this.status = status;
    this.total = total;
  }
}

module.exports = Order;