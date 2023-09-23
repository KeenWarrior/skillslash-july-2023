use("locations");

db.points.insertOne({
    name: "Point 2",
    location: {
        type: "Point",
        coordinates: [-93.856077, 50.848447]
    }
});