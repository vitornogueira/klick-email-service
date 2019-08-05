const db = require('../db');

module.exports = class UserRepository {
  constructor() {
    this.table = db.get('users');
  }

  create({ identifier, email }) {
    const user = this.find(identifier);

    if (user) {
      return user;
    }

    this.table
      .push({ identifier, email })
      .write();

    return this.find(email);
  }

  find(identifier) {
    return this.table.find({ identifier }).value();
  }
};
