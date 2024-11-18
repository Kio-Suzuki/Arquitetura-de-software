const calculateTotalPrice = require("./calculateTotalPrice");

console.log(calculateTotalPrice([
  { price: 10, quantity: 1 },
  { price: 50, quantity: 2 },
  { price: 5, quantity: 3 },
]));