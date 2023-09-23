use("geojson");

db.points.createIndex({ location: "2dsphere" });