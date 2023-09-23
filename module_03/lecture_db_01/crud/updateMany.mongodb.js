use("sslash");

db.users.updateMany(
  {},
  {
    $inc: {
      age: 1,
    },
  }
);
