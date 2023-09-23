use("another");

db.company.find({
  locations: {
    $elemMatch: {
      city: "Hyderabad",
    }
  }
});
