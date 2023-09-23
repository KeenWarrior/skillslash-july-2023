use("geojson");

db.points.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [12.9124777, 77.6303008],
      },
      $maxDistance: 1000,
    },
  },
});
