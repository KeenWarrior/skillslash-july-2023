use("sslash");

// $in, nin

db.users.find({
    city: {
        $nin: ["Bangalore", "Chennai"]
    },
    age: {
        $in: [30, 40]
    }
});