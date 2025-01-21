class Session {
  static currentUser = null;

  static setUser(username) {
    this.currentUser = username;
  }

  static getUser() {
    return this.currentUser;
  }

  static loggedIn() {
    return this.currentUser !== null;
  }
}

module.exports = Session;
