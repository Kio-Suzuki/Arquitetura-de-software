class Order {
  constructor(user, products, id = null, status = 'pending', total) {
    this.id = id;
    this.user = user;
    this.products = [];
    this.status = status;
    this.total = total;
  }
}

module.exports = Order;