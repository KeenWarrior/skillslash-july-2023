const bcryptjs = require('bcryptjs');

const password = "hello";

const hash = bcryptjs.hashSync(password, 10);

console.log(hash);

const result = bcryptjs.compareSync(password, hash);

console.log(result);