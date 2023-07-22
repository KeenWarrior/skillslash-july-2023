const fs = require('fs');
const { v4 } = require('uuid');

class User {

    static #users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

    static create(user) {
        const id = v4();
        user.id = id;
        User.#users[id] = user;
        fs.writeFileSync('./users.json', JSON.stringify(User.#users));
        return user;
    }

    static findById(id) {
        return User.#users[id];
    }

    static findAll() {
        return User.#users;
    }

    static updateById(id, updates) {
        const old = User.findById(id);
        const latest = {...old, ...updates};
        User.#users[id] = latest;
        fs.writeFileSync('./users.json', JSON.stringify(User.#users));
        return latest;
    }

    static deleteById(id) {
        const user = User.findById(id);
        delete User.#users[id];
        fs.writeFileSync('./users.json', JSON.stringify(User.#users));
        return user;
    }
}

module.exports = User;