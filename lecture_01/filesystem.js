const fs = require('fs');

// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//     if(!err){
//         console.log(data);
//     }
// });

fs.writeFile("./hello.txt", "Hello World!", (err) => {  });