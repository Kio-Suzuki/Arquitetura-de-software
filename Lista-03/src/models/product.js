class Product {
  constructor(name, price, quantity, id = null) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

module.exports = Product;