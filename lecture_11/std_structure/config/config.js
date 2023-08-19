const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().required().description("Node environment"),
  PORT: Joi.number().default(5000),
  MONGO_URI: Joi.string().required().description("Mongo DB url"),
  JWT_SECRET: Joi.string().required().description("JWT secret key"),
}).unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

console.log(envVars);

if (error) {
  console.log(error);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGO_URI,
  },
  jwt : {
    secret: envVars.JWT_SECRET,
  }
};

module.exports = config;
