use("indexing");

db.followers.dropIndex({ followerId: 1, followeeId: 1 });