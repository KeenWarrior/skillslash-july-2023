const Joi = require('joi');

const schema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
});

const { error, value } = schema.validate({ NODE_ENV: 'production' });

console.log(error, value);