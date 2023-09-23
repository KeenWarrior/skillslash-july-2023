use("indexing");

db.followers.find({ followerId: "user1", followeeId: "user999" }).explain("executionStats");
