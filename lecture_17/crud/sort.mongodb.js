use("sslash");

db.users
  .find({
    age: {
      $gte: 30,
    },
  })
  .sort({
    name: -1,
  })
  .limit(2);
