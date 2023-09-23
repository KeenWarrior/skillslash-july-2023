const fs = require("fs");

const path = "./test.txt";

if(fs.existsSync(path)) {
    const content = fs.readFileSync("./test.txt", "utf-8");
}


