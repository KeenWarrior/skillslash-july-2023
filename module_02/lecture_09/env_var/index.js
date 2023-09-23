const dotenv = require('dotenv');

if(process.env.NODE_ENV === 'development') {
    dotenv.config({path: './dev.env'});
} else if(process.env.NODE_ENV === 'production') {
    dotenv.config({path: './prod.env'});
} else if(process.env.NODE_ENV === 'test') {
    dotenv.config({path: './test.env'});
}

dotenv.config();

const PORT = process.env.PORT || 3000;

console.log(PORT);