use("sslash");

// $eq, $ne, $gt, $gte, $lt, $lte

db.users.find({
    age: {
        $ne: 30
    }
});