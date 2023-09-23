use("locations");

db.points.findOne({
    location: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-93.856076, 50.848446]
            },
            $maxDistance: 1000
        }
    }
})