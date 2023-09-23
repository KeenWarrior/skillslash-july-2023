use("indexing");

// db.followers.dropIndex({ followerId: 1, followeeId: 999 });
// db.followers.dropIndex({ followerId: 1 });
// db.followers.dropIndex({ followeeId: 1 });

// db.followers.createIndex({ followerId: 1, follweeId: 1 });
// db.followers.createIndex({ followerId: 1 });
// db.followers.createIndex({ follweeId: 1 });

db.followers.createIndex({ followerId: 1, follweeId: 1 });

