use("sslash");

db.users.updateOne({
    name: "Ravi"
}, {
    $set: {
        age: 31
    }
});