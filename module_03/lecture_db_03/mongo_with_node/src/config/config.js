import dotenv from "dotenv";
import joi from "joi";

dotenv.config();

const envVarsSchema = joi.object({
    NODE_ENV: joi.string()
        .allow("development", "production", "test", "provision")
        .required(),
    PORT: joi.number().default(8000),
    MONGO_HOST: joi.string().required().description("Mongo DB host url"),
    MONGO_PORT: joi.number().default(27017),
    MONGO_DB: joi.string().required().description("Mongo DB name"),
}).unknown();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}   

export const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongoose: {
        url: `mongodb://${envVars.MONGO_HOST}:${envVars.MONGO_PORT}/${envVars.MONGO_DB}`,
    },
};
