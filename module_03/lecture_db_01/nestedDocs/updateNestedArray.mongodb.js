use("another");

db.company.updateOne(
  {
    name: "Amazon",
  },
  {
    $pop: {
        locations: 1,
    }
  }
);
