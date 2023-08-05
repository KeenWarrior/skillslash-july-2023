const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://anujgargcse:n40lrZdMINhG@ep-withered-cake-742177.us-east-2.aws.neon.tech/neondb?sslmode=require");

module.exports = sequelize;