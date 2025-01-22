const OrderService = require('./orderService');
const saveData = require('../utils/saveData');
const path = './src/data/orders.json';

class PaymentService {
  constructor() {
    this.orders = saveData.readJSON(path);
  }

  payment(id) {
    const orders = saveData.readJSON(path); 

    const order = orders.find((o) => o.id === id);

    if (!order) {
      console.log('Order not found!');
      return null;
    }

    if (order.status === 'pending') {
      const approved = Math.random() >= 0.3;
      if (approved) {
        order.status = 'Payment approved';
        console.log(order);
        saveData.writeJSON(path, orders);
        console.log(`Order ${order.id} approved!`);
        return order;
      } else {
        order.status = 'Payment denied';
        saveData.writeJSON(path, orders);
        console.log('Payment denied!');
        return order;
      }
    }
  }
}


module.exports = PaymentService;