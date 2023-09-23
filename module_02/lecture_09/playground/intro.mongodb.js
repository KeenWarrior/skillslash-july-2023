use("skillslash");

// const doc = {
//     name: "Anuj Garg",
//     age: 29,    
//     profession: "Software Engineer",
//     tags: ["android", "nodejs", "react native"]
// }

// db.users.insertMany([
//     {
//         name: "Tanay Chandra",
//         age: 31,
//         profession: "Software Tester",
//         tags: ["testing", "automation", "selenium"]
//     },
//     {
//         name: "Robert Downey Jr.",
//         age: 55,
//         profession: "Actor",
//         tags: ["avengers", "marvel", "hollywood"]
//     }
// ]);

db.users.find({
    _id : ObjectId("64d75dc9a67ec8388dfc6e4a")
})

// db.users.updateOne({
//     _id : ObjectId("64d75dc9a67ec8388dfc6e4a")
// }, {
//     $set: {
//         age: 30
//     }
// });
