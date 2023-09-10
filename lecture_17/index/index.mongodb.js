use("indexing");

for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    if (Math.random() > 0.5) {
      db.followers.insertOne({
        followerId: "user" + i,
        followeeId: "user" + j,
      });
    }
  }
}
