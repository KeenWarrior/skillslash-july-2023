const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://anujgargcse:n40lrZdMINhG@ep-withered-cake-742177.us-east-2.aws.neon.tech/neondb?sslmode=require",
  {
    ssl: true,
  }
);

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

async function init() {
  await sequelize.sync();

//   const user = await User.create({
//     name: "Anuj",
//     age: 29,
//   });
}



init();
