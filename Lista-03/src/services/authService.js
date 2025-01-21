const User = require('../models/user');
const saveData = require('../utils/saveData');
const path = './src/data/users.json';
const Session = require('../utils/session');

class AuthService {
  constructor() {
    this.users = saveData.readJSON(path);
  }

  createUser(username, password) {
    const user = new User(username, password);
    this.users.push(user);
    saveData.writeJSON(path, this.users);
    console.log('Account created successfully!');
    return user;
  }

  login(username, password) {
    const user = this.users.find(
      (l) => l.username === username && l.password === password
    );

    if(user) {
      Session.setUser(username);
      const name = username.toUpperCase();
      console.log(`Welcome ${name}!`);
      return user;
    } else {
      console.log('Login fail, username or password incorrect!');
      return null;
    }
  }
}

module.exports = AuthService;