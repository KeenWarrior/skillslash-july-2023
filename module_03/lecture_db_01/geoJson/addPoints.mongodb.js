use("geojson");

db.points.insertMany([
  {
    name: "SkillSlah",
    location: {
      type: "Point",
      coordinates: [12.9124777, 77.6303008],
    },
  },
  {
    name: "Domino's Pizza",
    location: {
      type: "Point",
      coordinates: [12.915932, 77.6013126],
    },
  },
]);
