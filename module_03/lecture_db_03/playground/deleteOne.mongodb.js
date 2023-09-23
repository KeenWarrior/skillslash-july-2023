use("test");

db.users.findOne({ _id: ObjectId("64eb2b546e7d60b59ef53e06") });
db.users.deleteOne({ _id: ObjectId("64eb2b546e7d60b59ef53e06") });
