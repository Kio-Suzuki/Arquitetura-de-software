const Product = require('../models/product')
const saveData = require('../utils/saveData');
const path = './src/data/products.json';

class ProductService {
  constructor() {
    this.products = saveData.readJSON(path);

    this.currentId = this.products.length > 0 
      ? Math.max(...this.products.map((p) => p.id)) + 1 
      : 1;
  }

  addNewProduct(name, price, quantity) {
    const product = new Product(name, price, quantity);
    product.id = this.currentId++;
    this.products.push(product);
    saveData.writeJSON(path, this.products);
    console.log(`Product ${product.name} added to the catalog successfully!`);
    return product;
  }

  addProduct(id, quantity) {
    const index = this.products.findIndex((product) => product.id === id);

    if(index === -1) {
      console.log('Product not found!');
      return null;
    }

    const product = this.products[index];
    if(product.quantity < quantity) {
      console.log('Insufficient quantity!');
      return null;
    }

    product.quantity += quantity;
    saveData.writeJSON(path, this.products);

    console.log(`${quantity} units of product ${product.name} have been added, ${product.quantity} units now in total.`);
    return product;
  }

  removeProduct(id, quantity) {
    const index = this.products.findIndex((product) => product.id === id);

    if(index === -1) {
      console.log('Product not found!');
      return null;
    }

    const product = this.products[index];
    if(product.quantity < quantity) {
      console.log('Insufficient quantity!');
      return null;
    }

    product.quantity -= quantity;
    saveData.writeJSON(path, this.products);

    console.log(`${quantity} units of product ${product.name} have been removed, ${product.quantity} units remain.`);
    return product;
  }

  editProduct(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);

    if(index === -1) {
      console.log('Product not found!');
      return null;
    }
   
    const product = this.products[index];
    if(updatedProduct.name) product.name = updatedProduct.name;
    if(updatedProduct.price) product.price = updatedProduct.price;
    if(updatedProduct.quantity) product.quantity = updatedProduct.quantity;

    saveData.writeJSON(path, this.products);

    console.log(`Product ${id} updated!`)
    return product;
  }

  verifyStock(name) {
    const product = this.products.find((product) => product.name === name);
    return product;
  }

  listProducts() {
    return console.log('Product catalog:', this.products);
  }
}

module.exports = ProductService;