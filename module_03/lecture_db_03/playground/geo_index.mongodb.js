use("locations");

db.points.createIndex({ location: "2dsphere" });