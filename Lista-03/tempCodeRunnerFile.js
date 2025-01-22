if(Session.loggedIn()) {
  order.createOrder(Session.getUser(), 'Mouse', 3);
} else {
  console.log('Please Sign In First!');
}