import fs from "fs";

// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//     if(!err){
//         console.log(data);
//     }
// });

// fs.writeFile("./hello.txt", "Hello World!", (err) => {  });

// const hello = fs.readFileSync("./hello.txt", "utf-8");
// console.log(hello);

const out = await fs.promises.readFile("./hello.txt", "utf-8");
console.log(out);

