use("indexing");

db.followers.find({ followerId: "user1" }).explain("executionStats");
