use("sslash");

db.users.deleteMany({
    age: {
        $gte: 30
    }
});